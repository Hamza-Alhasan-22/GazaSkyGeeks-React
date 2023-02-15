import React from 'react';
import StarsRating from '../Shared/StarsRating'

//                            Apparels
import apparelsWallpaper from '../../products/Apparels/apparels-wallpaper.jpg'
//Shorts
import short1 from '../../products/Apparels/Shorts/man-shorts1.jpg'
import short2 from '../../products/Apparels/Shorts/man-shorts1-v1.jpg'
import short3 from '../../products/Apparels/Shorts/man-shorts1-v2.jpg'
import short4 from '../../products/Apparels/Shorts/man-shorts1-v3.jpg'

import short5 from '../../products/Apparels/Shorts/man-shorts2.jpg'
import short6 from '../../products/Apparels/Shorts/man-shorts2-v1.jpg'

import short7 from '../../products/Apparels/Shorts/man-shorts3.jpg'
import short8 from '../../products/Apparels/Shorts/man-shorts3-v1.jpg'
import short9 from '../../products/Apparels/Shorts/man-shorts3-v2.jpg'
import short10 from '../../products/Apparels/Shorts/man-shorts3-v3.jpg'

//Pants
import pant1 from '../../products/Apparels/Pants/men-pant1.jpg'
import pant2 from '../../products/Apparels/Pants/men-pant2.jpg'
import pant3 from '../../products/Apparels/Pants/men-pant3.jpg'
import pant4 from '../../products/Apparels/Pants/men-pant4.jpg'
import pant5 from '../../products/Apparels/Pants/men-pant5.jpg'
import pant6 from '../../products/Apparels/Pants/men-pant6.jpg'
import pant7 from '../../products/Apparels/Pants/men-pant7.jpg'
import pant8 from '../../products/Apparels/Pants/men-pant8.jpg'
import pant9 from '../../products/Apparels/Pants/men-pant9.jpg'
import pant10 from '../../products/Apparels/Pants/men-pant10.jpg'
import pant11 from '../../products/Apparels/Pants/men-pant11.jpg'
import pant12 from '../../products/Apparels/Pants/men-pant12.jpg'
import pant13 from '../../products/Apparels/Pants/men-pant13.jpg'

//                            Accessories
import accessoriesWallpaper from '../../products/Accessories/accessories-wallpaper.jpg'
//Watches
import watch1 from '../../products/Accessories/Watches/watch1.jpg'
import watch2 from '../../products/Accessories/Watches/watch1-v1.jpg'
import watch3 from '../../products/Accessories/Watches/watch1-v2.jpg'

import watch4 from '../../products/Accessories/Watches/watch2.jpg'
import watch5 from '../../products/Accessories/Watches/watch2-v1.jpg'
import watch6 from '../../products/Accessories/Watches/watch2-v2.jpg'

import watch7 from '../../products/Accessories/Watches/watch3.jpg'
import watch8 from '../../products/Accessories/Watches/watch3-v1.jpg'
import watch9 from '../../products/Accessories/Watches/watch3-v2.jpg'
import watch10 from '../../products/Accessories/Watches/watch3-v3.jpg'

import watch11 from '../../products/Accessories/Watches/watch4.jpg'
import watch12 from '../../products/Accessories/Watches/watch4-v1.jpg'
import watch13 from '../../products/Accessories/Watches/watch4-v2.jpg'
import watch14 from '../../products/Accessories/Watches/watch4-v3.jpg'

//Glasses
import glass1 from '../../products/Accessories/Glasses/glass1.jpg'
import glass2 from '../../products/Accessories/Glasses/glass1-v1.jpg'
import glass3 from '../../products/Accessories/Glasses/glass1-v2.jpg'

import glass4 from '../../products/Accessories/Glasses/glass2.jpg'
import glass5 from '../../products/Accessories/Glasses/glass3.jpg'
import glass6 from '../../products/Accessories/Glasses/glass4.jpg'
import glass7 from '../../products/Accessories/Glasses/glass5.jpg'
import glass8 from '../../products/Accessories/Glasses/glass6.jpg'

//Gloves
import glove1 from '../../products/Accessories/Gloves/glove1.jpg'
import glove2 from '../../products/Accessories/Gloves/glove1-v1.jpg'
import glove3 from '../../products/Accessories/Gloves/glove1-v2.jpg'
import glove4 from '../../products/Accessories/Gloves/glove1-v3.jpg'

import glove5 from '../../products/Accessories/Gloves/glove2.jpg'
import glove6 from '../../products/Accessories/Gloves/glove2-v1.jpg'
import glove7 from '../../products/Accessories/Gloves/glove2-v2.jpg'

import glove8 from '../../products/Accessories/Gloves/glove3.jpg'
import glove9 from '../../products/Accessories/Gloves/glove4.jpg'
import glove10 from '../../products/Accessories/Gloves/glove5.jpg'
import glove11 from '../../products/Accessories/Gloves/glove6.jpg'

//                            HouseWare
import houseWareWallpaper from '../../products/Houseware/houseware-wallpaper.jpg'
import houseware1 from '../../products/Houseware/houseware1.jpg'
import houseware2 from '../../products/Houseware/houseware2.jpg'
import houseware3 from '../../products/Houseware/houseware3.jpg'
import houseware4 from '../../products/Houseware/houseware4.jpg'
import houseware5 from '../../products/Houseware/houseware5.jpg'
import houseware6 from '../../products/Houseware/houseware6.jpg'
import houseware7 from '../../products/Houseware/houseware7.jpg'
import houseware8 from '../../products/Houseware/houseware8.jpg'
import houseware9 from '../../products/Houseware/houseware9.jpg'
import houseware10 from '../../products/Houseware/houseware10.jpg'
import houseware11 from '../../products/Houseware/houseware11.jpg'
import houseware12 from '../../products/Houseware/houseware12.jpg'
import houseware13 from '../../products/Houseware/houseware13.jpg'
import houseware14 from '../../products/Houseware/houseware14.jpg'

//                            Others
import othersWallpaper from '../../products/Others/others-wallpaper.jpg'

export const products = [
  [//Apparels
    {//Pants
      type: 'Pants',
      typeProducts: [
        {
          id: '4',
          image: pant1,
          description: 'Man Pants 1',
          price: '$90.00',
          newTag: ''
        },
        {
          id: '5',
          image: pant2,
          description: 'Man Pants 2',
          price: '$95.00',
          newTag: ''
        },
        {
          id: '6',
          image: pant3,
          description: 'Man Pants 3',
          price: '$77.00',
          newTag: ''
        },
        {
          id: '7',
          image: pant4,
          description: 'Man Pants 4',
          price: '$60.00',
          newTag: 'active'
        },
        {
          id: '8',
          image: pant5,
          description: 'Man Pants 5',
          price: '$80.00',
          newTag: ''
        },
        {
          id: '9',
          image: pant6,
          description: 'Man Pants 6',
          price: '$85.00',
          newTag: 'active'
        },
        {
          id: '10',
          image: pant7,
          description: 'Man Pants 7',
          price: '$100.00',
          newTag: ''
        },
        {
          id: '11',
          image: pant8,
          description: 'Man Pants 8',
          price: '$72.00',
          newTag: ''
        },
        {
          id: '13',
          image: pant9,
          description: 'Man Pants 9',
          price: '$25.00',
          newTag: ''
        },
        {
          id: '14',
          image: pant10,
          description: 'Man Pants 10',
          price: '$54.00',
          newTag: ''
        },
        {
          id: '15',
          image: pant11,
          description: 'Man Pants 11',
          price: '$48.00',
          newTag: ''
        },
        {
          id: '16',
          image: pant12,
          description: 'Man Pants 12',
          price: '$42.00',
          newTag: ''
        },
        {
          id: '12',
          image: pant13,
          description: 'Man Pants 13',
          price: '$97.00',
          newTag: ''
        },
      ]
    },
    {//Shorts
      type: 'Shorts',
      typeProducts: [
        {
          id: '1',
          image: short1,
          description: 'Man Short 1',
          price: '$75.00',
          newTag: ''
        },
        {
          id: '2',
          image: short5,
          description: 'Man Short 2',
          price: '$60.00',
          newTag: 'active'
        },
        {
          id: '3',
          image: short7,
          description: 'Man Short 3',
          price: '$65.00',
          newTag: ''
        },
      ]
    },
  ],
  [//Accessories
    {
      type: 'Watches',
      typeProducts: [
        {
          id: '17',
          image: watch1,
          description: 'Watch 1',
          price: '$8.00',
          newTag: ''
        },
        {
          id: '20',
          image: watch4,
          description: 'Watch 2',
          price: '$9.00',
          newTag: ''
        },
        {
          id: '21',
          image: watch7,
          description: 'Watch 3',
          price: '$5.00',
          newTag: 'active'
        },
        {
          id: '22',
          image: watch11,
          description: 'Watch 4',
          price: '$4.00',
          newTag: ''
        }
      ]
    },
    {
      type: 'Gloves',
      typeProducts: [
        {
          id: '18',
          image: glove1,
          description: 'Glove 1',
          price: '$20.00',
          newTag: ''
        },
        {
          id: '28',
          image: glove5,
          description: 'Glove 2',
          price: '$23.00',
          newTag: 'active'
        },
        {
          id: '29',
          image: glove8,
          description: 'Glove 3',
          price: '$39.00',
          newTag: ''
        },
        {
          id: '30',
          image: glove9,
          description: 'Glove 4',
          price: '$41.00',
          newTag: ''
        },
        {
          id: '31',
          image: glove10,
          description: 'Glove 5',
          price: '$36.00',
          newTag: ''
        },
        {
          id: '32',
          image: glove11,
          description: 'Glove 6',
          price: '$29.00',
          newTag: ''
        },
      ]
    },
    {
      type: 'Glasses',
      typeProducts: [
        {
          id: '19',
          image: glass1,
          description: 'Glass 1',
          price: '$33.00',
          newTag: ''
        },
        {
          id: '23',
          image: glass4,
          description: 'Glass 2',
          price: '$16.00',
          newTag: ''
        },
        {
          id: '24',
          image: glass5,
          description: 'Glass 3',
          price: '$19.00',
          newTag: ''
        },
        {
          id: '25',
          image: glass6,
          description: 'Glass 4',
          price: '$18.00',
          newTag: 'active'
        },
        {
          id: '26',
          image: glass7,
          description: 'Glass 5',
          price: '$25.00',
          newTag: ''
        },
        {
          id: '27',
          image: glass8,
          description: 'Glass 6',
          price: '$7.50',
          newTag: ''
        }
      ]
    }
  ],
  [//HouseWare
    {
      type: 'HouseWare',
      typeProducts: [
        {
          id: '33',
          image: houseware1,
          description: 'HouseWare 1',
          price: '$35.00',
          newTag: 'active'
        },
        {
          id: '34',
          image: houseware2,
          description: 'HouseWare 2',
          price: '$12.00',
          newTag: ''
        },
        {
          id: '35',
          image: houseware3,
          description: 'HouseWare 3',
          price: '$50.00',
          newTag: ''
        },
        {
          id: '36',
          image: houseware4,
          description: 'HouseWare 4',
          price: '$24.00',
          newTag: ''
        },
        {
          id: '37',
          image: houseware5,
          description: 'HouseWare 5',
          price: '$4.00',
          newTag: 'active'
        },
        {
          id: '38',
          image: houseware6,
          description: 'HouseWare 6',
          price: '$19.00',
          newTag: ''
        },
        {
          id: '39',
          image: houseware7,
          description: 'HouseWare 7',
          price: '$47.00',
          newTag: 'active'
        },
        {
          id: '40',
          image: houseware8,
          description: 'HouseWare 8',
          price: '$31.00',
          newTag: ''
        },
        {
          id: '41',
          image: houseware9,
          description: 'HouseWare 9',
          price: '$42.00',
          newTag: ''
        },
        {
          id: '42',
          image: houseware10,
          description: 'HouseWare 10',
          price: '$17.00',
          newTag: ''
        },
        {
          id: '43',
          image: houseware11,
          description: 'HouseWare 11',
          price: '$33.00',
          newTag: ''
        },
        {
          id: '44',
          image: houseware12,
          description: 'HouseWare 12',
          price: '$29.00',
          newTag: ''
        },
        {
          id: '45',
          image: houseware13,
          description: 'HouseWare 13',
          price: '$49.00',
          newTag: ''
        },
        {
          id: '46',
          image: houseware14,
          description: 'HouseWare 14',
          price: '$5.00',
          newTag: ''
        }
      ]
    }
  ],
  [//Others
    {
      type: 'Others',
      typeProducts: []
    }
  ]
];

export const popUpData = [
  {
    id: '1',
    title: products[0][1].typeProducts[0].description,
    sideImgs: [products[0][1].typeProducts[0].image,short2,short3,short4],
    mainImg: products[0][1].typeProducts[0].image,
    data: {
      title: `Apparels -> Shorts -> ${products[0][1].typeProducts[0].description}`,
      price: products[0][1].typeProducts[0].price,
      stars: <StarsRating key={1} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '2',
    title: products[0][1].typeProducts[1].description,
    sideImgs: [products[0][1].typeProducts[1].image,short6],
    mainImg: products[0][1].typeProducts[1].image,
    data: {
      title: `Apparels -> Shorts -> ${products[0][1].typeProducts[1].description}`,
      price: products[0][1].typeProducts[1].price,
      stars: <StarsRating key={2} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '3',
    title: products[0][1].typeProducts[2].description,
    sideImgs: [products[0][1].typeProducts[2].image,short8,short9,short10],
    mainImg: products[0][1].typeProducts[2].image,
    data: {
      title: `Apparels -> Shorts -> ${products[0][1].typeProducts[2].description}`,
      price: products[0][1].typeProducts[2].price,
      stars: <StarsRating key={3} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '4',
    title: products[0][0].typeProducts[0].description,
    sideImgs: [products[0][0].typeProducts[0].image],
    mainImg: products[0][0].typeProducts[0].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[0].description}`,
      price: products[0][0].typeProducts[0].price,
      stars: <StarsRating key={4} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '5',
    title: products[0][0].typeProducts[1].description,
    sideImgs: [products[0][0].typeProducts[1].image],
    mainImg: products[0][0].typeProducts[1].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[1].description}`,
      price: products[0][0].typeProducts[1].price,
      stars: <StarsRating key={5} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '6',
    title: products[0][0].typeProducts[2].description,
    sideImgs: [products[0][0].typeProducts[2].image],
    mainImg: products[0][0].typeProducts[2].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[2].description}`,
      price: products[0][0].typeProducts[2].price,
      stars: <StarsRating key={6} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '7',
    title: products[0][0].typeProducts[3].description,
    sideImgs: [products[0][0].typeProducts[3].image],
    mainImg: products[0][0].typeProducts[3].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[3].description}`,
      price: products[0][0].typeProducts[3].price,
      stars: <StarsRating key={7} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '8',
    title: products[0][0].typeProducts[4].description,
    sideImgs: [products[0][0].typeProducts[4].image],
    mainImg: products[0][0].typeProducts[4].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[4].description}`,
      price: products[0][0].typeProducts[4].price,
      stars: <StarsRating key={8} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '9',
    title: products[0][0].typeProducts[5].description,
    sideImgs: [products[0][0].typeProducts[5].image],
    mainImg: products[0][0].typeProducts[5].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[5].description}`,
      price: products[0][0].typeProducts[5].price,
      stars: <StarsRating key={9} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '10',
    title: products[0][0].typeProducts[6].description,
    sideImgs: [products[0][0].typeProducts[6].image],
    mainImg: products[0][0].typeProducts[6].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[6].description}`,
      price: products[0][0].typeProducts[6].price,
      stars: <StarsRating key={10} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '11',
    title: products[0][0].typeProducts[7].description,
    sideImgs: [products[0][0].typeProducts[7].image],
    mainImg: products[0][0].typeProducts[7].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[7].description}`,
      price: products[0][0].typeProducts[7].price,
      stars: <StarsRating key={11} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '12',
    title: products[0][0].typeProducts[12].description,
    sideImgs: [products[0][0].typeProducts[12].image],
    mainImg: products[0][0].typeProducts[12].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[12].description}`,
      price: products[0][0].typeProducts[12].price,
      stars: <StarsRating key={12} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '13',
    title: products[0][0].typeProducts[8].description,
    sideImgs: [products[0][0].typeProducts[8].image],
    mainImg: products[0][0].typeProducts[8].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[8].description}`,
      price: products[0][0].typeProducts[8].price,
      stars: <StarsRating key={13} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '14',
    title: products[0][0].typeProducts[9].description,
    sideImgs: [products[0][0].typeProducts[9].image],
    mainImg: products[0][0].typeProducts[9].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[9].description}`,
      price: products[0][0].typeProducts[9].price,
      stars: <StarsRating key={14} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '15',
    title: products[0][0].typeProducts[10].description,
    sideImgs: [products[0][0].typeProducts[10].image],
    mainImg: products[0][0].typeProducts[10].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[10].description}`,
      price: products[0][0].typeProducts[10].price,
      stars: <StarsRating key={15} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '16',
    title: products[0][0].typeProducts[11].description,
    sideImgs: [products[0][0].typeProducts[11].image],
    mainImg: products[0][0].typeProducts[11].image,
    data: {
      title: `Apparels -> Pants -> ${products[0][0].typeProducts[11].description}`,
      price: products[0][0].typeProducts[11].price,
      stars: <StarsRating key={16} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '17',
    title: products[1][0].typeProducts[0].description,
    sideImgs: [products[1][0].typeProducts[0].image,watch2,watch3],
    mainImg: products[1][0].typeProducts[0].image,
    data: {
      title: `Accessories -> Watches -> ${products[1][0].typeProducts[0].description}`,
      price: products[1][0].typeProducts[0].price,
      stars: <StarsRating key={17} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '20',
    title: products[1][0].typeProducts[1].description,
    sideImgs: [products[1][0].typeProducts[1].image,watch5,watch6],
    mainImg: products[1][0].typeProducts[1].image,
    data: {
      title: `Accessories -> Watches -> ${products[1][0].typeProducts[1].description}`,
      price: products[1][0].typeProducts[1].price,
      stars: <StarsRating key={20} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '21',
    title: products[1][0].typeProducts[2].description,
    sideImgs: [products[1][0].typeProducts[2].image,watch8,watch9,watch10],
    mainImg: products[1][0].typeProducts[2].image,
    data: {
      title: `Accessories -> Watches -> ${products[1][0].typeProducts[2].description}`,
      price: products[1][0].typeProducts[2].price,
      stars: <StarsRating key={21} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '22',
    title: products[1][0].typeProducts[3].description,
    sideImgs: [products[1][0].typeProducts[3].image,watch12,watch13,watch14],
    mainImg: products[1][0].typeProducts[3].image,
    data: {
      title: `Accessories -> Watches -> ${products[1][0].typeProducts[3].description}`,
      price: products[1][0].typeProducts[3].price,
      stars: <StarsRating key={22} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '19',
    title: products[1][2].typeProducts[0].description,
    sideImgs: [products[1][2].typeProducts[0].image,glass2,glass3],
    mainImg: products[1][2].typeProducts[0].image,
    data: {
      title: `Accessories -> Glasses -> ${products[1][2].typeProducts[0].description}`,
      price: products[1][2].typeProducts[0].price,
      stars: <StarsRating key={19} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '23',
    title: products[1][2].typeProducts[1].description,
    sideImgs: [products[1][2].typeProducts[1].image],
    mainImg: products[1][2].typeProducts[1].image,
    data: {
      title: `Accessories -> Glasses -> ${products[1][2].typeProducts[1].description}`,
      price: products[1][2].typeProducts[1].price,
      stars: <StarsRating key={23} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '24',
    title: products[1][2].typeProducts[2].description,
    sideImgs: [products[1][2].typeProducts[2].image],
    mainImg: products[1][2].typeProducts[2].image,
    data: {
      title: `Accessories -> Glasses -> ${products[1][2].typeProducts[2].description}`,
      price: products[1][2].typeProducts[2].price,
      stars: <StarsRating key={24} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '25',
    title: products[1][2].typeProducts[3].description,
    sideImgs: [products[1][2].typeProducts[3].image],
    mainImg: products[1][2].typeProducts[3].image,
    data: {
      title: `Accessories -> Glasses -> ${products[1][2].typeProducts[3].description}`,
      price: products[1][2].typeProducts[3].price,
      stars: <StarsRating key={25} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '26',
    title: products[1][2].typeProducts[4].description,
    sideImgs: [products[1][2].typeProducts[4].image],
    mainImg: products[1][2].typeProducts[4].image,
    data: {
      title: `Accessories -> Glasses -> ${products[1][2].typeProducts[4].description}`,
      price: products[1][2].typeProducts[4].price,
      stars: <StarsRating key={26} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '27',
    title: products[1][2].typeProducts[5].description,
    sideImgs: [products[1][2].typeProducts[5].image],
    mainImg: products[1][2].typeProducts[5].image,
    data: {
      title: `Accessories -> Glasses -> ${products[1][2].typeProducts[5].description}`,
      price: products[1][2].typeProducts[5].price,
      stars: <StarsRating key={27} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '18',
    title: products[1][1].typeProducts[0].description,
    sideImgs: [products[1][1].typeProducts[0].image,glove2,glove3,glove4],
    mainImg: products[1][1].typeProducts[0].image,
    data: {
      title: `Accessories -> Gloves -> ${products[1][1].typeProducts[0].description}`,
      price: products[1][1].typeProducts[0].price,
      stars: <StarsRating key={18} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '28',
    title: products[1][1].typeProducts[1].description,
    sideImgs: [products[1][1].typeProducts[1].image,glove6,glove7],
    mainImg: products[1][1].typeProducts[1].image,
    data: {
      title: `Accessories -> Gloves -> ${products[1][1].typeProducts[1].description}`,
      price: products[1][1].typeProducts[1].price,
      stars: <StarsRating key={28} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '29',
    title: products[1][1].typeProducts[2].description,
    sideImgs: [products[1][1].typeProducts[2].image],
    mainImg: products[1][1].typeProducts[2].image,
    data: {
      title: `Accessories -> Gloves -> ${products[1][1].typeProducts[2].description}`,
      price: products[1][1].typeProducts[2].price,
      stars: <StarsRating key={29} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '30',
    title: products[1][1].typeProducts[3].description,
    sideImgs: [products[1][1].typeProducts[3].image],
    mainImg: products[1][1].typeProducts[3].image,
    data: {
      title: `Accessories -> Gloves -> ${products[1][1].typeProducts[3].description}`,
      price: products[1][1].typeProducts[3].price,
      stars: <StarsRating key={30} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '31',
    title: products[1][1].typeProducts[4].description,
    sideImgs: [products[1][1].typeProducts[4].image],
    mainImg: products[1][1].typeProducts[4].image,
    data: {
      title: `Accessories -> Gloves -> ${products[1][1].typeProducts[4].description}`,
      price: products[1][1].typeProducts[4].price,
      stars: <StarsRating key={31} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '32',
    title: products[1][1].typeProducts[5].description,
    sideImgs: [products[1][1].typeProducts[5].image],
    mainImg: products[1][1].typeProducts[5].image,
    data: {
      title: `Accessories -> Gloves -> ${products[1][1].typeProducts[5].description}`,
      price: products[1][1].typeProducts[5].price,
      stars: <StarsRating key={32} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '33',
    title: products[2][0].typeProducts[0].description,
    sideImgs: [products[2][0].typeProducts[0].image],
    mainImg: products[2][0].typeProducts[0].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[0].description}`,
      price: products[2][0].typeProducts[0].price,
      stars: <StarsRating key={33} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '34',
    title: products[2][0].typeProducts[1].description,
    sideImgs: [products[2][0].typeProducts[1].image],
    mainImg: products[2][0].typeProducts[1].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[1].description}`,
      price: products[2][0].typeProducts[1].price,
      stars: <StarsRating key={34} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '35',
    title: products[2][0].typeProducts[2].description,
    sideImgs: [products[2][0].typeProducts[2].image],
    mainImg: products[2][0].typeProducts[2].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[2].description}`,
      price: products[2][0].typeProducts[2].price,
      stars: <StarsRating key={35} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '36',
    title: products[2][0].typeProducts[3].description,
    sideImgs: [products[2][0].typeProducts[3].image],
    mainImg: products[2][0].typeProducts[3].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[3].description}`,
      price: products[2][0].typeProducts[3].price,
      stars: <StarsRating key={36} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '37',
    title: products[2][0].typeProducts[4].description,
    sideImgs: [products[2][0].typeProducts[4].image],
    mainImg: products[2][0].typeProducts[4].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[4].description}`,
      price: products[2][0].typeProducts[4].price,
      stars: <StarsRating key={37} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '38',
    title: products[2][0].typeProducts[5].description,
    sideImgs: [products[2][0].typeProducts[5].image],
    mainImg: products[2][0].typeProducts[5].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[5].description}`,
      price: products[2][0].typeProducts[5].price,
      stars: <StarsRating key={38} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '39',
    title: products[2][0].typeProducts[6].description,
    sideImgs: [products[2][0].typeProducts[6].image],
    mainImg: products[2][0].typeProducts[6].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[6].description}`,
      price: products[2][0].typeProducts[6].price,
      stars: <StarsRating key={39} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '40',
    title: products[2][0].typeProducts[7].description,
    sideImgs: [products[2][0].typeProducts[7].image],
    mainImg: products[2][0].typeProducts[7].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[7].description}`,
      price: products[2][0].typeProducts[7].price,
      stars: <StarsRating key={40} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '41',
    title: products[2][0].typeProducts[8].description,
    sideImgs: [products[2][0].typeProducts[8].image],
    mainImg: products[2][0].typeProducts[8].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[8].description}`,
      price: products[2][0].typeProducts[8].price,
      stars: <StarsRating key={41} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '42',
    title: products[2][0].typeProducts[9].description,
    sideImgs: [products[2][0].typeProducts[9].image],
    mainImg: products[2][0].typeProducts[9].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[9].description}`,
      price: products[2][0].typeProducts[9].price,
      stars: <StarsRating key={42} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '43',
    title: products[2][0].typeProducts[10].description,
    sideImgs: [products[2][0].typeProducts[10].image],
    mainImg: products[2][0].typeProducts[10].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[10].description}`,
      price: products[2][0].typeProducts[10].price,
      stars: <StarsRating key={43} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '44',
    title: products[2][0].typeProducts[11].description,
    sideImgs: [products[2][0].typeProducts[11].image],
    mainImg: products[2][0].typeProducts[11].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[11].description}`,
      price: products[2][0].typeProducts[11].price,
      stars: <StarsRating key={44} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '45',
    title: products[2][0].typeProducts[12].description,
    sideImgs: [products[2][0].typeProducts[12].image],
    mainImg: products[2][0].typeProducts[12].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[12].description}`,
      price: products[2][0].typeProducts[12].price,
      stars: <StarsRating key={45} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
  {
    id: '46',
    title: products[2][0].typeProducts[13].description,
    sideImgs: [products[2][0].typeProducts[13].image],
    mainImg: products[2][0].typeProducts[13].image,
    data: {
      title: `HouseWare -> ${products[2][0].typeProducts[13].description}`,
      price: products[2][0].typeProducts[13].price,
      stars: <StarsRating key={46} />,
      description: 'Inspired by the continuous length of the lunghi or sarong seen in hot climates everywhere ',
      employment: '54 jobs',
      partnership: 'Randall Armstrong',
      collab: 'Augusta Mendoza'
    }
  },
]

export const navTitles = [
  //The 'label' in the 'options' must be the same as 'type' in 'products', otherwise, an error will occur
  {
    title: 'Apparels',
    options: [
      {
        label: 'PANTS', types: products[0][0].typeProducts.map(i => i.description)
      },
      {
        label: 'SHORTS', types: products[0][1].typeProducts.map(i => i.description)
      }
    ],
  },
  {
    title: 'Accessories',
    options: [
      {
        label: 'WATCHES', types: products[1][0].typeProducts.map(i => i.description)
      },
      {
        label: 'GLOVES', types: products[1][1].typeProducts.map(i => i.description)
      },
      {
        label: 'GLASSES', types: products[1][2].typeProducts.map(i => i.description)
      }
    ],
  },
  {
    title: 'Houseware',
    options: [

    ]
  },
  {
    title: 'Others',
    options: [

    ]
  },
  // {
  //   title: 'Styles',
  //   options: [
  //     {
  //       label: 'BOLD', types: ['type1', 'type2', 'type3']
  //     },
  //     {
  //       label: 'MONOCHROME', types: ['type1', 'type2', 'type3']
  //     },
  //     {
  //       label: 'NEUTRALS', types: ['type1', 'type2', 'type3']
  //     },
  //   ]
  // },
];
export const optionsSort = [
  {
    label: "Name",
    value: "1",
  },
  {
    label: "Price: low->high",
    value: "2",
  },
  {
    label: "Price: hight->low",
    value: "3",
  },
];

export const productPageInfo = [
  {
    id: 0,
    title: 'Apparels',
    description: 'White Gold began gaining popularity in the early 1900’s as an alternative to platinum.',
    wallpaper: apparelsWallpaper
  },
  {
    id: 1,
    title: 'Accessories',
    description: 'White Gold began gaining popularity in the early 1900’s as an alternative to platinum.',
    wallpaper: accessoriesWallpaper
  },
  {
    id: 2,
    title: 'HouseWare',
    description: 'White Gold began gaining popularity in the early 1900’s as an alternative to platinum.',
    wallpaper: houseWareWallpaper
  },
  {
    id: 3,
    title: 'Other',
    description: 'White Gold began gaining popularity in the early 1900’s as an alternative to platinum.',
    wallpaper: othersWallpaper
  },
];
