import { Meteor } from 'meteor/meteor';
import Images from '/lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  if(Images.find().count() == 0){
	for(var i=1;i<7;i++){
		Images.insert(
		{
			img_src : '/img'+i+'.jpg',
			img_alt : 'Gambar'
		});
	}
}
});
