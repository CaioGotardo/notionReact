
import { Post} from "./post"
import { Header } from "./header"


export function App(){
  return(
    <div>
  <Header />

    <Post 
    author="rodrigo"
    content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit quas amet ipsa voluptates molestiae ea alias beatae, recusandae eius quis vitae debitis illum fuga nobis sit impedit repellat possimus."
    />

    <Post 
    author="Caio"
    content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit quas amet ipsa voluptates molestiae ea alias beatae, recusandae eius quis vitae debitis illum fuga nobis sit impedit repellat possimus."
    />

    <Post 
    author="Natan "
    content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit quas amet ipsa voluptates molestiae ea alias beatae, recusandae eius quis vitae debitis illum fuga nobis sit impedit repellat possimus."
    />

    <Post 
    author="Cleber "
    content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam odit quas amet ipsa voluptates molestiae ea alias beatae, recusandae eius quis vitae debitis illum fuga nobis sit impedit repellat possimus."
    />
    </div>
  )
}
