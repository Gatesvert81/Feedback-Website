import React from 'react'
import Link from 'next/link'
import Anchor from '../styledComponents/Anchor'

function LinkAnchor({children, route}) {
    return (
        <Link href={route} >
            <Anchor>
                {children}
            </Anchor>
        </Link>
    )
}

export default LinkAnchor
