import { collection, getDocs, addDoc } from "firebase/firestore"; 
import {db} from './index'

export const createUserScore = async (username, score) => {
    console.log(username, score)

    try {
        const userScoreCollectionRef = collection(db, 'userScores')
        const documentRef =  await addDoc(userScoreCollectionRef, {
            username,
            score
        });
        console.log(documentRef, 'ada')
    } catch (error) {
        console.log(error)

    }
}

export const getUserScores = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'userScores'));
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
      console.error(error);
      console.log("get error")
    }
};
  
//   export const updateUserScore = async (docId, newScore) => {
//     try {
//       await firestore.collection('userScores').doc(docId).update({
//         score: newScore
//       });
//     } catch (error) {
//       console.error("Error updating document: ", error);
//     }
//   };
  
//   export const deleteUserScore = async (docId) => {
//     try {
//       await firestore.collection('userScores').doc(docId).delete();
//     } catch (error) {
//       console.error("Error deleting document: ", error);
//     }
//   };