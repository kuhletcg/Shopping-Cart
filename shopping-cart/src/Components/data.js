const data = {
  products: [
     
    {
        
      id: '1',
      name: 'Ladies short',
      price: 500,
      image: 'data:image/jpeg;base64,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',
    
    },
    
    {
      id: '2',
      name: 'Duvet cover',
      price: 700,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRSQ06glVKuyk_at1h2TwRJ3nmR-SJ03OuHDr9ZgGsATlF1NAqM9G5LOhzhPKiEaAVwdOf4Hb1EBFwrBArLyaFdDeu5Wvwsnr8hMFFrXh8&usqp=CAc',
    },
    {
      id: '3',
      name: 'Chest of drawer',
      price: 900 ,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4utKWA29dIdGN5uk7APMqb92EPsE2rFzUVNUDVzMEKKeHJgBZShAfX8y-wTJcku4bscp3hhmgk48&usqp=CAc',
    },
    {
id: '4',
      name: 'Television',
      price: 23999 ,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ05OVDKjU1Zj0NNczsVvMi7ZJ0GM-WIm8edCHJc55f4WowomkHTHXp4It2SKrNg9wrp53wm8idij2A0Q&usqp=CAc',
    },
       {
id: '5',
      name: 'Dress',
      price: 499 ,
      image: 'https://assets.superbalistcdn.co.za/500x720/filters:quality(75):format(jpg)/1870795/original.jpg',
    },
   
 {
id: '6',
      name: 'Earphones',
      price: 250 ,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQOlJpp22zSs8gu7IWMaLfpPoelEE9Xt7d-eoxJaYGaLCZXlhq3NvseGQALXyGlz0R4fSpoRCzTIw&usqp=CAc',
    },
{
id: '7',
      name: 'Ladies Sneakers',
      price: 1200,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-cN1rxZO4v2rq7upLniwnH6zwhiHJKcWXw&usqp=CAU',
    },
    {
id: '8',
      name: 'Cap',
      price: 599,
      image: 'https://www.sportsmanswarehouse.co.za/media/catalog/product/cache/264206a79a5fae8329033d18985d1146/1/1/1145612_0.jpg',
    },
    {
id: '9',
      name: 'Mens Jesery',
      price: 1500,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxtLAXWaaWOkuLlNNPM5xsc4Hp2RCSIAixZXIPd5j2S70BDLhArB6mC0jZNcw2OPAxLq0bVP_WD5lPY8QmSxj44suZQRCVK2TDncs1hTONRAnW-jKoSJBjpMQ&usqp=CAc',
    },
{
    id: '10',
      name: 'Bed',
      price: 2500,
      image: 'https://www.themattresswarehouse.co.za/static/34bb05dade6a6f7599d5c8e4d1153348/9f4bf/RestonicRestoreBed.webp',
    },


  ],
};
export default data;
