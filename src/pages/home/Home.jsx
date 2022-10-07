
import { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList';
import { projectFirestore } from '../../firebase/config';
// import useFetch from '../../hooks/useFetch';
import './Home.css'

const Home = () => {
// const {data, isPending, error} = useFetch("http://localhost:3001/recipes")
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsPending(true)

        // Without realtime fire base
        // projectFirestore.collection('recipe').get().then(snapshot => {
        //     if (snapshot.empty) {
        //         setError("No recipes to load")
        //         setIsPending(false)
        //     } else {
        //         let results = []
        //         snapshot.docs.forEach(doc => {
        //             results.push({ id: doc.id, ...doc.data() })
        //         })
        //         setData(results)
        //         setIsPending(false)
        //     }
        // }).catch(err => {
        //     setError(err.message)
        //     setIsPending(false)
        // })

        // With realtime firebase
        const unsub = projectFirestore.collection('recipe').onSnapshot(snapshot => {
            if (snapshot.empty) {
                setError("No recipes to load")
                setIsPending(false)
            } else {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({ id: doc.id, ...doc.data() })
                })
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsub()


    }, [])



    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    );
}
 
export default Home;