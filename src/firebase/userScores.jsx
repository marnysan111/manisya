import { collection, getDocs, addDoc, doc } from "firebase/firestore"; 
import {db} from './index'

export const createUserScore = async (username, score, setMessage) => {
    const payload = {'username': username, 'score': score}
     try {
        const userRef =  await addDoc(collection(db, 'score'),payload);
        return userRef
     } catch (error) {
         console.log(error)
         setMessage('ユーザ登録に失敗しました')
    }
}

export const getUserScores = async (setUserScores, setTotalScore) => {
    try {
      const snapshot = await getDocs(collection(db, 'score'));
      const dock = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      const totalScore = dock.reduce((sum, doc) => sum + (doc.score || 0), 0);
      setUserScores(dock)
      setTotalScore(totalScore)
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