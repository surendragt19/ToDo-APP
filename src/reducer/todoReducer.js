const initData={
    list:[]
}
const toDoReducer=(state=initData,action)=>{

    switch(action.type){
        case 'ADD': 
            const {id,data}=action.payload;
            if(data.length>2){
            return{
                ...state,
                list:
                [
                    ...state.list,
                    {
                    id:id,
                    data:data
                    }
                ]
            }
            }

            case 'DELETE': 
            const newList=state.list.filter((ele)=>ele.id != action.id)
            return{
                ...state,
                list:newList
            }
            case 'REMOVE': 
            return{
                ...state,
                list:[]
            }
            default : return state
       
    }

}

export default toDoReducer;
