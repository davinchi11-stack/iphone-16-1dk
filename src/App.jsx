import { useEffect } from 'react'
import { scrollText } from './animation/text'
import  {Suspense , lazy} from 'react'
import Loading from './components/Loading/Loading';

const IphoneWrapLazy = lazy(() => import('./components/Iphone_wrap/IphoneWrap'));

function App() {

 useEffect(() => {
   scrollText()
 })

  return (
  <>
   <Suspense fallback={<Loading/>} >
   <IphoneWrapLazy/>
   </Suspense>
  </>
  )
}

export default App
