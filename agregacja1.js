var stage1 = {
    "$match": {"title_year": {        
        $gte: 2005,
        $lt: 2010}}
};

var stage2 = { $group: { _id: "$title_year", totalGross: { $sum: "$gross" } } };

db.Movies.aggregate({
    "$facet": {
        "GrossInYear": [stage1, stage2]
        }
    });



