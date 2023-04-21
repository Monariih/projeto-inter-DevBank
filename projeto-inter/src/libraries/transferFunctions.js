import { doc, setDoc} from "firebase/firestore";

class TransferFunctions{
    static async createData(email, fullName, cpf){
        window.db
        var resp;
        try {
            const docRef = await setDoc(doc(db, `databases/devsBank/users/user.${cpf.replace(/[./-]/g, "")}`),{
                fullName: fullName,
                email: email,
                cpf: cpf.replace(/[./-]/g, ""),
                saldo: 0
            })
        }catch (error){
            console.error(error)
        }
        return resp
    }
}

export default TransferFunctions