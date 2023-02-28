interface User {
   id: string
   username: string
   isAdmin: boolean
}

interface LoginType {
   email: string
   password: string
}

type ArticleState = {
   articles: IArticle[]
}

type UserAction = {
   type: string
   user: User
}

type DispatchType = (args: UserAction) => UserAction
