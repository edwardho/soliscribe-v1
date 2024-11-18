import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const auth = async () => {
    const { getUser } = getKindeServerSession()
    return await getUser()
} 