'use strict';

//NEWS ITEMS - EVENTUALLY, THESE SHOULD GO TO A DATABASE
var news = [
    [{
        id: 'ingenic-third-meeting',
        title: '3rd Workshop on Gender Equality in CS at Third Level',
        artdate: '5 February 2019',
        datetime: '2019-02-05',
        image: '/images/meetup.jpg',
        alttext: 'Third INGENIC meeting',
        text: '<p>The Irish Network for Gender Equality in Computing (INGENIC) held its 3rd meeting in DCU on Friday 11th' +
            '            January. The meeting was chaired by Dr. Monica Ward from the School of Computing, DCU. The group is composed' +
            '            of interested academic members of national third level organisations. Their main aims are to:</p>' +
            '        <ul>' +
            '            <li>Help increase the enrolment of females on third level computing programmes.</li>' +
            '            <li>Improve on the experience of female students within computing programmes.</li>' +
            '            <li>Identify and develop supports for staff development in line with national and international' +
            '                recommendations for improving gender diversity and equality.' +
            '            </li>' +
            '            <li>Support collaborative approaches to address their aims.</li>' +
            '        </ul>' +
            '        <p>Three guest speakers gave extremely interesting talks. Sandra Healy, DCU\'s Head of Diversity and Inclusion,' +
            '            gave an insightful presentation on the Athena Swan process. Jennifer Ryan (IDA) informed the group about the' +
            '            IDA\'s work on gathering information on females in STEM initiatives across different sectors: primary school,' +
            '            secondary school, third level, working and returners. Joe English (Professional Development Service for' +
            '            Teachers - PDST) gave an overview of the roll-out of the new Leaving Cert Computer Science curriculum and' +
            '            the Continuous Professional Development (CPD) they have delivered to teachers. Overall, the meeting was very' +
            '            productive and members will continue to work on collaborative initiatives focusing on increasing gender' +
            '            equality in computing and relevant projects in the female in computing domain.</p>' +
            '        <p>The Irish Network for Gender Equality in Computing (INGENIC) was founded by Dr Susan McKeever (TU Dublin) and' +
            '            Dr Catherine Mooney (UCD) in 2017 in response to what they saw as a need to coordinate efforts to address' +
            '            Gender Equality in Computing across all third level institutions in the Republic of Ireland. Previous' +
            '            workshops have been held in DIT in June 2018 and the School of Computer Science in UCD in September' +
            '            2018.</p>',
    },
    {
        id: 'sample-news2',
        title: 'Sample News 2',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news1.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news3',
        title: 'Sample News 3',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/image3.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news4',
        title: 'Sample News 4',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news3.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    }],
    [{
        id: 'sample-news5',
        title: 'Sample News 5',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news4.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news6',
        title: 'Sample News 6',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/image1.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news7',
        title: 'Sample News 7',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news2.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news8',
        title: 'Sample News 8',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/image2.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    }]
];

//ADDING NEW NEWS
//For each new article, fill out the template below and add it (with the brackets) to the above array called news.
//The structure of the array is that news get added in groups of four with the following brackets system:
//  {[{group1-1}, {group1-2}, {group1-3}, {group1-4}],[{group2-1}, {group2-2}, {group2-3}, {group2-4}], etc.}
/*
{
        id: 'sample-news',              //The link route to the news item page of this piece of news. Same as the one in the newslinks array
        title: 'Sample News',           //The title of the article
        artdate: '25 March 2019',       //Date published in written format
        datetime: '2019-03-25',         //Date published in numeric format
        image: '/images/image3.jpg',    //Route to the image to be added to the article
        alttext: 'Sample Alt',          //The alt text for the image
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'

            //The content/text of the article with HTML tags.
    },      //The comma is only needed if this article is not the last one in the array
*/

//ADDING NEW NEWS VOL 2
//Once a new article has been added to the array news, take the id value of the new article and add it to the array below called newslinks.
//Newslinks follows the same system as news, where everything is added in groups of four, but has a slightly different brackets system:
//  {[group1-link1, group1-link2, group1-link3, group1-link4],[group2-link1, group2-link2, group2-link3, group2-link4], etc.}
var newslinks = [["ingenic-third-meeting", "sample-news2", "sample-news3", "sample-news4"], ["sample-news5", "sample-news6", "sample-news7", "sample-news8"]];

//require
var express = require("express");


var port = process.env.PORT || 8083;

var app = express();

app.set("view engine", "ejs");
app.set("views", "templates");
app.use(express.static("static"));


//HOMEPAGE
app.get('/', function (req, res) {
    res.render('index.ejs', {"currentPage": "home"});
});

//ABOUT
app.get('/about', function (req, res) {
    res.render('about', {"currentPage": "about"});
});

//CONTACT
app.get('/contact', function (req, res) {
    res.render('contact', {"currentPage": "contact"});
});

//NEWS
app.get('/news', function (req, res) {
    res.render('news', {"newslinks": newslinks, "item": news, "currentPage": "news"});
});

//NEWS ITEMS
app.get('/news/:id', function (req, res) {
    for (var i in news) {
        for (var j in news) {
            if (req.params.id === news[i][j].id) {
                res.render("newsitem.ejs", {"item": news[i][j], "currentPage": "news"});
            }
        }
    }
});

//RESOURCES
app.get('/resources', function (req, res) {
    res.render('resources', {"currentPage": "resources"});
});


//UNIVERSITIES INVOLVED
app.get('/institutions', function (req, res) {
    res.render('institutions', {"currentPage": "institutions"});
});

//CURRENT COURSES
app.get('/courses', function (req, res) {
    res.render('courses', {"currentPage": "courses"});
});


//set the server to listen on a port
app.listen(port);


console.log("server running http://localhost:" + port);

