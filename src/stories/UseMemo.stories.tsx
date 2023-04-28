import React, {useCallback, useMemo, useState} from "react";

export default  {
    title: "UseMemo"
}

export const DifficultCountingExample1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)


    let resultB = 1


 const  resultA = useMemo(() => {
        let tempResultA = 1

    for (let i = 1; i <= a; i++) {
        let fake = 0
        while (fake < 100000) {
            fake++
         const fakeValue = Math.random()
        }
        tempResultA = tempResultA +1

    }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB +1
    }


    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
            Result for b: {resultB}
        </div>
        </>
    )
}


    const UsersSecret = (props: {users: Array<string>}) => {
        return (
            <div>
                {props.users.map((u, i) =>
                    <div key={i}>{u}</div>)}</div>
        )
    }







    export const LikeUseCallback = () => {

        console.log("LikeUseCallback")

        const [counter, setCounter] = useState(0)
        const [books, setBooks] = useState(["Yana", "Milana", "Una"])



        // const addBook = () => {
        //     const newBook = [...books, "HTML " +  new Date().getTime()]
        //
        //     setBooks(newBook)
        // }

      const  memoizedAddBook = useMemo(() =>{
          return () => {
              const newBook = [...books, "HTML " + new Date().getTime()]
              setBooks(newBook)
          }
      } , [books])

        const memoizedAddBook2 = useCallback(() => {
            console.log(books)
                const newBook = [...books, "HTML " + new Date().getTime()]
                setBooks(newBook)


        }, [books])



        return (
            <div>
                <button onClick={() => setCounter(counter + 1)}>+</button>

                {counter}
                <Book addBook={memoizedAddBook2}/>
            </div>

        )
    }

    type BookSecretPropsType = {
    addBook: () => void
    }

    const BooksSecret = (props: BookSecretPropsType) => {
        console.log("BooksSecret")
        return <div>
            <button onClick={() => props.addBook()}>add book</button>

        </div>
    }

    const Book = React.memo(BooksSecret)

