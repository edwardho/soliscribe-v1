import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const auth = () => {
    const { getUser } = getKindeServerSession()
    return getUser()
} 