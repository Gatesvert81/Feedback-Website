import React, { useState } from 'react'
import Button from '../styledComponents/Button'
import CategoryWrapper from '../styledComponents/CategoryWrapper'

function CategoryCard() {

    const [category, setCategory] = useState('All')

    const handleCategory = (btn) => {
        const condition = category === btn
        return condition ? 'primary' : 'secondary'
    }

    return (
        <CategoryWrapper>
            <Button
                type={handleCategory('All')}
                click={() => setCategory('All')}
            >
                All
            </Button>
            <Button
                type={handleCategory('UI')}
                click={() => setCategory('UI')}
            >
                UI
            </Button>
            <Button
                type={handleCategory('UX')}
                click={() => setCategory('UX')}
            >
                UX
            </Button>
            <Button
                type={handleCategory('Enhancement')}
                click={() => setCategory('Enhancement')}
            >
                Enhancement
            </Button>
            <Button
                type={handleCategory('Bug')}
                click={() => setCategory('Bug')}
            >
                Bug
            </Button>
            <Button
                type={handleCategory('Feature')}
                click={() => setCategory('Feature')}
            >
                Feature
            </Button>
        </CategoryWrapper>
    )
}

export default CategoryCard
