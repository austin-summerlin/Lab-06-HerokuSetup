/* eslint-disable quotes */
import app from '../lib/app.js';
import supertest from 'supertest';
const request = supertest(app);

// If a GET reqest is made to /api/cats
// does the server respond with status of 200
// and body matching the cats data?
it('GET /api/creatures', async () => {
  const creatures = [
    {
      url:
        'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
      title: 'UniWhal',
      description: 'A unicorn and a narwhal nuzzling their horns',
      keyword: 'narwhal',
      horns: 1
    },
    {
      url:
        'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
      title: 'Rhino Family',
      description: 'Mother (or father) rhino with two babies',
      keyword: 'rhino',
      horns: 2
    },
    {
      url:
        'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
      title: 'Unicorn Head',
      description: 'Someone wearing a creepy unicorn head mask',
      keyword: 'unicorn',
      horns: 1
    },
    {
      url:
        'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80',
      title: 'UniLego',
      description: 'Lego figurine dressed in a unicorn outfit',
      keyword: 'unilego',
      horns: 1
    },
    {
      url:
        'https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg',
      title: 'Basically a unicorn',
      description: 'A narwhal is basically a unicorn after all, right?',
      keyword: 'narwhal',
      horns: 1
    },
    {
      url:
        'https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg',
      title: '#truth',
      description: 'The truth behind narwhals',
      keyword: 'narwhal',
      horns: 1
    },
    {
      url:
        'https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003',
      title: 'Cera',
      description:
        "Three horns but still, horns. And who doesn't like The Land Before Time?",
      keyword: 'triceratops',
      horns: 3
    },
    {
      url:
        'https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg',
      title: 'Believe',
      description: 'I believe in unicorns, do you?',
      keyword: 'unicorn',
      horns: 1
    },
    {
      url:
        'https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg',
      title: 'Baby mouflon',
      description: 'The cuteness that is a baby mouflon asleep',
      keyword: 'mouflon',
      horns: 2
    },
    {
      url:
        'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
      title: 'Horned Lizard',
      description: 'Fave food: ants',
      keyword: 'lizard',
      horns: 100
    },
    {
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg',
      title: 'Smaug',
      description: "Fan illustration of Smaug from 'The Hobbit'",
      keyword: 'dragon',
      horns: 100
    }
  ];

  const response = await request.get('/api/cats');

  expect(response.status).toBe(200); // 200 = OK
  expect(response.body).toEqual(creatures);

});