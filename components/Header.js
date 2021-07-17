import Link from 'next/link'


export default function Header() {
    return (
        <header>
              < div className="container">  
              <nav>
              <ul>
            <li>
                <Link href="/">
                    <a><u>VBlog</u></a>
                </Link>
            </li>
            <br></br>
            <li>
                <Link href="/about">
                    <a><u>About</u></a>
                </Link>
            </li>
           </ul>

              </nav>
        
        </div>

         
           
        </header>
    )
}
