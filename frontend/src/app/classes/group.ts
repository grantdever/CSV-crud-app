import User from "./user";
//I don't know if I need these anymore
//"Property 'id' has no initializer and is not definitely assigned in the constructor."
export class Group {
    id!: number;
    name!: string;
    symbol!: string;
    users!: User[];
}

export default Group;