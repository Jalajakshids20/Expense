// useTransactionManagement.js
import { addDoc, collection, serverTimestamp, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useTransactionManagement = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userID } = useGetUserInfo();

  const addTransaction = async ({ description, transactionAmount, transactionType }) => {
    await addDoc(transactionCollectionRef, {
      userID,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };

  const deleteTransaction = async (transactionId) => {
    const transactionDocRef = doc(db, "transactions", transactionId);
    try {
      await deleteDoc(transactionDocRef);
      console.log("Transaction successfully deleted");
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  const editTransaction = async (transactionId, updatedTransactionData) => {
    const transactionDocRef = doc(db, "transactions", transactionId);
    try {
      await updateDoc(transactionDocRef, updatedTransactionData);
      console.log("Transaction successfully updated");
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  return { addTransaction, deleteTransaction, editTransaction };
};
