var stage0 = {"$match": {"title_year": {$gte: 2012}}}

var stage1 = {$project: {director_name:1, movie_facebook_likes:1, imdb_score:1}}

var stage2 = { $group: { _id: "$director_name", 
    movieLikes: { $avg: "$movie_facebook_likes"} ,avgMoviesScore: { $avg: "$imdb_score" } } };

var stage3 = { $sort: { movieLikes : -1 } };

var stage4 = { $sample: { size: 10 } }

db.Movies.aggregate(
stage0,stage1,stage2, stage3);



