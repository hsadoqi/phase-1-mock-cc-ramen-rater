// write your code here

// 1: install, start json-server and review data
// 2. open index.html and dev tools in browser
// 3. open index.html file and review elements
// 4. read README once over
// 5. set up url endpoints

const baseUrl = `http://localhost:3000`
const ramensUrl = `http://localhost:3000/ramens`

// 6. split deliverables and break up each deliverable.

        // See all ramen images in the `div` with the id of `ramen-menu`. When the page
        // loads, request the data from the server to get all the ramen objects. Then,
        // display the image for each of the ramen using an `img` tag inside the
        // `#ramen-menu` div.

        // a. organize which elements or data you need.
            // get div with id 'ramen-menu'

            const ramenMenu = document.getElementById('ramen-menu');
            // tip: console.log your data and elements to make sure you are getting the ones you want
            // console.log(ramenMenu)
            // caution: always remember to delete your console.logs afterwards, not just comment them out

        // b. fetch all ramen objects

            // test out your data and console.log to confirm your data with the server
            // fetch(ramensUrl).then(res => res.json()).then((console.log))

        //     fetch(ramensUrl)
        //     .then(res => res.json())
        //     .then(data => data.forEach(ramen => {
        //         // confirm you're getting each object separately
        //         // console.log(ramen)

        // // c. create image tag for each ramen

        //             const ramenImg = document.createElement('img');
        //             ramenImg.src = ramen.image
        //             ramenImg.alt = ramen.name
        // // d. add image tag to div

        //             ramenMenu.appendChild(ramenImg)

        //         })
        //     )



        // Click on an image from the `#ramen-menu` div and see all the info about that
        // ramen displayed inside the `#ramen-detail` div and where it says
        // `insert comment here` and `insert rating here`.

        // a. gather necessary elements/data

                // get ramen detail div container

                const ramenDetailContainer = document.getElementById('ramen-detail')
                // console.log(ramenDetail)

                // get elements inside ramen detail div that you will be changing (img, name, restaurant)

                // Different ways to get these elements:
                // 1. className

                // don't forget to grab the first element using [0] because it's an array

                // console.log to confirm
                // const ramenImageWithoutIdx = document.getElementsByClassName('detail-image')
                // const ramenImage = document.getElementsByClassName('detail-image')[0]

                // 2. add ids to elements yourself inside index.html

                // const ramenImage = document.getElementById('detail-image')
                // console.log('hi', ramenImage)

                // 3. query using div container and query selector

                // const ramenImage = document.querySelector('#ramen-detail > .detail-image')
                // console.log(ramenImage)

                // const ramenImage = document.querySelector('.detail-image')
                // console.log(ramenImage)

                // remember that query selector will only return first element in this case, even if there are multiple elements
                // with that query so make sure that the first element is what you want
                // use the first query to be more specific

                // 4. query inside div container

                // or, query inside the ramen container specifically, like this:

                const ramenImage = ramenDetailContainer.querySelector('.detail-image')
                const ramenName = ramenDetailContainer.querySelector('.name')
                const ramenRestaurant = ramenDetailContainer.querySelector('.restaurant')

                // console.log(ramenImage, ramenName, ramenRestaurant)




                // image tag -- inside fetch request above

                // this is the same fetch as above (just copied it down)

                fetch(ramensUrl)
                .then(res => res.json())
                .then(data => data.forEach(ramen => {
                        const ramenImg = document.createElement('img');
                        ramenImg.src = ramen.image
                        ramenImg.alt = ramen.name

        // b. add event listener to each individual image element


                        // we want to do everything we need to do to the image tag here
                        // before we append it to the div so make sure to make space before
                        // the appendChild below


                        ramenImg.addEventListener('click', (e) => {
                            // e refers to the event object that  is automatically passed in to
                            // the callback function of an event listener, has information about the
                            // event, including which element in the HTML triggered it
                            // you can access the specific object with e.target
                            // console.log(e.target)

                            // ramen is the ramen object on line 109 -- i still have access to it because i'm writing
                            // my callback function for the event listener inside
                            // if i write a separate function like showRamenDetails, for example, I'd need to write
                            // ramenImg.addEventListener('click', (e, ramen) => showRamenDetails(ramen))
                            // the second argument will be the ramen object we are iterating through from our fetch

        // c. add Ramen details from fetch to elements we grabbed above

                            ramenImage.src = ramen.image
                            ramenImage.alt = ramen.name

                            ramenName.innerText = ramen.name
                            ramenRestaurant.innerText = ramen.restaurant

                        })
                        ramenMenu.appendChild(ramenImg)

                    })
                )

        // - Create a new ramen after submitting the `new-ramen` form. The new ramen should
        // be added to the`#ramen-menu` div. The new ramen does not need to persist; in
        // other words, if you refresh the page, it's okay that the new ramen is no
        // longer on the page.
