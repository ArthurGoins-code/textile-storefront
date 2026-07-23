"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { contracts } from "@/lib/data";
import type { SupportContract } from "@/lib/types";

export interface CartLine {
  contract: SupportContract;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  totalItems: number;
  subtotal: number;
  addItem: (contractId: string, quantity?: number) => void;
  removeItem: (contractId: string) => void;
  setQuantity: (contractId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "textest-cart";

type StoredCart = Record<string, number>;

function readStoredCart(): StoredCart {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredCart) : {};
  } catch {
    return {};
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<StoredCart>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setQuantities(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(quantities));
    } catch {
      // Ignore storage errors (e.g. private browsing, blocked storage access).
    }
  }, [quantities, hydrated]);

  const addItem = useCallback((contractId: string, quantity = 1) => {
    setQuantities((prev) => ({
      ...prev,
      [contractId]: (prev[contractId] ?? 0) + quantity,
    }));
  }, []);

  const removeItem = useCallback((contractId: string) => {
    setQuantities((prev) => {
      const next = { ...prev };
      delete next[contractId];
      return next;
    });
  }, []);

  const setQuantity = useCallback((contractId: string, quantity: number) => {
    setQuantities((prev) => {
      if (quantity <= 0) {
        const next = { ...prev };
        delete next[contractId];
        return next;
      }
      return { ...prev, [contractId]: quantity };
    });
  }, []);

  const clearCart = useCallback(() => {
    setQuantities({});
  }, []);

  const lines: CartLine[] = useMemo(
    () =>
      Object.entries(quantities)
        .map(([contractId, quantity]) => {
          const contract = contracts.find((c) => c.id === contractId);
          if (!contract) return null;
          return { contract, quantity };
        })
        .filter((line): line is CartLine => line !== null),
    [quantities],
  );

  const totalItems = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity, 0),
    [lines],
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, line) => sum + line.quantity * line.contract.price, 0),
    [lines],
  );

  const value: CartContextValue = {
    lines,
    totalItems,
    subtotal,
    addItem,
    removeItem,
    setQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
