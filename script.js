const quotes = [
    {
        item: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
        author: 'Albert Einstein'
    },
    {
        item: 'Learn as if you will live forever, live like you will die tomorrow.',
        author: 'Mahatma Gandhi'
    },
    {
        item: 'When you change your thoughts, remember to also change your world.',
        author: 'Norman Vincent Peale'
    },
    {
        item: 'Don\’t let yesterday take up too much of today.',
        author: 'Will Rogers'
    },
    {
        item: 'The elevator to success is out of order. You’ll have to use the stairs, one step at a time.',
        author: 'Joe Girard'
    },
    {
        item: 'I am so clever that sometimes I don\’t understand a single word of what I am saying.',
        author: 'Oscar Wilde'
    },

    {
        item: 'Life is 10% what happens to you and 90% how you react to it.',
        author: 'Charles R. Swindoll'
    },
    {
        item: 'Success is a journey not a destination.',
        author: 'Ben Sweetland'
    },
    {
        item: 'It always seems impossible until it\'s done.',
        author: 'Nelson Mandela'
    },
    {
        item: 'Aim for the moon. If you miss, you may hit a star.',
        author: 'W. Clement Stone'
    },
    {
        item: 'It takes courage to grow up and become who you really are.',
        author: 'E.E. Cummings'
    },
    {
        item: 'Be happy for this moment. This moment in your life.',
        author: 'Omar Khayyam'
    },
    {
        item: 'If you can dream it, you can do it.',
        author: 'Walt Disney'
    },
    {
        item: 'Mistakes are a fact of life. It is the response to the errors that counts.',
        author: 'Nikki Giovanni'
    },
    {
        item: 'The only person you are destined to become is the person you decide to be.',
        author: 'Ralph Waldo Emerson'
    },
]

const images = [
    {url: 'images/bg-1.jpeg'},
    {url: 'images/bg-2.jpeg'},
    {url: 'images/bg-3.jpeg'},
    {url: 'images/bg-4.jpeg'},
    {url: 'images/bg-5.jpeg'},
    {url: 'images/bg-6.jpg'},
    {url: 'images/bg-7.jpeg'},
    {url: 'images/bg-8.jpeg'},
    {url: 'images/bg-9.jpeg'},
    {url: 'images/bg-10.jpeg'},
    {url: 'images/bg-11.jpeg'},
    {url: 'images/bg-12.jpeg'},
    {url: 'images/bg-13.jpg'},
    {url: 'images/bg-14.jpeg'},
    {url: 'images/bg-15.jpeg'}
]

const randomNumber = () => Math.floor(Math.random() * 16)

const getRandomData = (num, arr) => arr[num]

const showData = arr => {
    if(arr.url) {
        document.querySelector('.main-screen').style.backgroundImage = `url("${arr.url}")`
    } else {
        document.querySelector('.quote-body').innerHTML = arr.item
        document.querySelector('.quote-author').innerHTML = arr.author
    }
}

document.querySelector('.main-btn').addEventListener('click', () => {
    showData(getRandomData(randomNumber(),quotes)); 
    showData(getRandomData(randomNumber(),images));
})