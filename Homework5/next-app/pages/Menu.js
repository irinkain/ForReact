import React from 'react';
import Link from 'next/link'
import styles from './menu.module.css'
function MenuComponent(){
    return(
        <header className={styles.header}>
            <div>
                <div className={styles.headerContainer}>
                    <ul>
                        <li>
                            <Link href="/All"><a>All</a></Link>
                        </li>
                        <li>
                            <Link href='/Countries'><a>Countries</a></Link>
                        </li>
                        <li>
                            <Link href='/Country'><a>Country</a></Link>
                        </li>
                        <li>
                            <Link href='/States'><a>States</a></Link>
                        </li>
                        <li>
                            <Link href='/John'><a>John HOpkins CSSE Data</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default MenuComponent;
