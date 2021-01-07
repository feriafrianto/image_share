import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import Images from '/lib/collections.js';

import './main.html';

var img_data= [
{
	img_src : '/img1.jpg',
	img_alt : 'satu'
},
{
	img_src : '/img2.jpg',
	img_alt : 'dua'
},
{
	img_src : '/img3.jpg',
	img_alt : 'tiga'
},
];
Template.images.helpers({images:Images.find()});
Template.images.events({
	'click .js-image':function(event){
		$(event.target).css("width","200px");
	}
})
