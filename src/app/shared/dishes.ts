import {Dish} from './dish';
export const DISHES: Dish[]=[
    {
        id: 0,
        name: 'Kabob(chuan\'er)',
        image: '/assets/images/uthappizza.png',
        category: 'mains',
        label: 'Hot',
        price: '4.99',
        featured:true,
        // tslint:disable-next-line:max-line-length
        description: 'Sharing chuan\'er with friends while drinking beer late at night is a lifestyle for Xi\'anese. A small skewer only costs 1 yuan ($0.16), and they\'re addictive. It\'s not absurd for two people to order -- no kidding, it\'s totally normal -- 100 skewers of beef or lamb fully coated in chili pepper and cumin powder.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },{
        id: 1,
        name: 'Cold noodles(liangpi)',
        image: '/assets/images/zucchipakoda.png',
        category: 'appetizer',
        label: '',
        price: '1.99',
        featured:false,
        description: 'As the name suggests, "cold noodles" are made by cooking thinly sliced rice noodles, then setting them aside until cooled. The most basic way to serve cold noodles is drizzled with a sauce of chili oil, pepper powder, vinegar and diced garlic, topped with bean sprouts and sliced cucumber. The taste is spicy and the texture silky.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },
    {
        id: 2,
        name: 'Xi\'an meat burger(roujiamo)',
        image: '/assets/images/vadonut.png',
        category: 'appetizer',
        label: 'New',
        price: '1.99',
        featured:false,
        description: 'It\'s like a hamburger, but with a much longer history\.There are just two critical elements for a roujiamo -- baked leavened bread and shredded braised meat. A good jiamo should be baked using a traditional furnace instead of an electric oven. Meat -- usually a mixture of fat and lean pork that has been braised for hours -- should be hand-shredded and pocketed in the bread.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    },{
        id: 3,
        name: 'Flatbread in mutton soup(yangroupaomo)',
        image: '/assets/images/elaicheesecake.png',
        category: 'dessert',
        label: '',
        price: '2.99',
        featured:false,
        description: 'If one dish could represent Xi\'an, locals would tell you it\'d be without doubt yangrou paomo -- an aromatic, tasty and spicy bowl of shredded flatbread soaked in mutton broth.',
        comments: [
            {
                rating: 5,
                comment: 'Imagine all the eatables, living in conFusion!',
                author: 'John Lemon',
                date: '2012-10-16T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Sends anyone to heaven, I wish I could get my mother-in-law to eat it!',
                author: 'Paul McVites',
                date: '2014-09-05T17:57:28.556094Z'
            },
            {
                rating: 3,
                comment: 'Eat it, just eat it!',
                author: 'Michael Jaikishan',
                date: '2015-02-13T17:57:28.556094Z'
            },
            {
                rating: 4,
                comment: 'Ultimate, Reaching for the stars!',
                author: 'Ringo Starry',
                date: '2013-12-02T17:57:28.556094Z'
            },
            {
                rating: 2,
                comment: 'It\'s your birthday, we\'re gonna party!',
                author: '25 Cent',
                date: '2011-12-02T17:57:28.556094Z'
            }
        ]
    }
];
