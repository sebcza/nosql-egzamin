var stage1 = {
    "$match": {"title_year": {        
        $gte: 2001,
        $lt: 2008}}
};

var stage2 = { $group: { _id: "$title_year", totalGross: { $sum: "$gross" } } };

var stage3 = { $sort: { _id : 1 } };

db.Movies.aggregate(
stage1, stage2, stage3);



