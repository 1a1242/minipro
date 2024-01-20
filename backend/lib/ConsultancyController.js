const { json } = require('express');
const dataModal = require('../db/ConsultancySchema')

module.exports.postData =async function(req,res) {
    try{
        const myobj = req.body;
        // console.log(myobj)
        // myobj.year = myobj.year ? new Date(myobj.year) : null;
        // myobj.filed = new Date(myobj.filed)
        // myobj.published = myobj.published ? new Date(myobj.published) : null;
        dataModal.create(myobj, function(err, result) {  
            if (err) throw err;
            console.log("success her")
            return res.status(200).json(result);
        }
        )
    }
    catch(error){
        return res.status(500).json(error)
    }
}
module.exports.getTitles = async function(req,res){
    try{
        dataModal.find({}, 'title', function(err, result) {
            if (err) throw err;
            console.log("success")
            const names = result.map(item => item.title);
            return res.status(200).json(names)
        })
    }catch(error){
        console.log("ERROR",error)
        return res.status(500).json(error)
    }
}
module.exports.bulkUpload = async function(req,res){
    try{
        const object = req.body;
        let result1 = [];
       for (const key in object) {
        console.log("year",object[key].year)
        object[key].year = object[key].year ? new Date(object[key].year) : null;
        object[key].filed = new Date(object[key].filed)
        object[key].published = object[key].published ? new Date(object[key].published) : null;
           console.log("year",object[key].year)
           
           dataModal.create(object[key],function(err,result){
               if(err) throw err;
               result1.push(result);
           })            
       }
        return res.status(200).json(result1)
    }
    catch(error){
        console.log("ERROR",error)
        return res.status(500).json(error)
    }
}
module.exports.deleteData = async function(req,res){
    try{
        const id = req.params.id;
        dataModal.findByIdAndDelete(id,function(err,result){
            if(err) throw err;
            console.log("success")
            return res.status(200).json(result);
        })
    }
    catch(error){
        return res.status(500).json(error)
    }
}

module.exports.editData = async function(req,res){
    try{
        dataModal.findOneAndReplace({_id:req.body._id},req.body,{runValidators:true}, function(err,result){
            if(err) throw err;
            console.log("updated");
            return res.status(200).json({msg:"Successfully Updated"})
        })
    }
    catch(err){
        return res.status(500).json(err)
    }
}

module.exports.getData = async function (req, res) {
    try{
        console.log("IN GETDATA1",req.query);
        let title = req.query.title || ""
        let branch = req.query.branch || ""
        let user = req.query.authors || ""
        let co_user = req.query.co || ""
        let ngo = req.query.ngo || ""
        let industry = req.query.industry || ""
        let page = req.query.page || 1
        let limit = req.query.limit || 10
        // let startDate = req.query.startDate?new Date(req.query.startDate):0
        // let endDate = req.query.endDate?new Date(req.query.endDate):0
        // let startYear = parseInt(req.query.startYear) || 0
        // let endYear = parseInt(req.query.endYear) || 0
        // let startMonth = startDate !== 0 ? startDate.getMonth() : 0
        // let endMonth = endDate !== 0 ? endDate.getMonth() : 0

        // console.log(cjb)
        let query = {};
        if (title!=""){
            query["title"]= { $regex: '.*' + title + '.*', "$options" : "i" }
        }
            if (branch!=""){
                console.log("IN BRANCH")
                query["dept"] = { $regex: '.*' + branch + '.*', "$options" : "i" }
            }
        if (user!=""){
            query["pi"] = { $regex: '.*' + user + '.*', "$options" : "i" }
        }
        if (co_user!=""){
            // console.log(cjb)
            query["co_pi"] = { $regex: '.*' + co_user + '.*', "$options" : "i" }
            // console.log(query)
        }
        if(industry!=""){
            query["industry"] = { $regex: '.*' + industry + '.*', "$options" : "i" }
        }
        if(ngo!=""){
            query["ngo"] ={ $regex: '.*' + ngo + '.*', "$options" : "i"}
        }
        
        console.log("WHERE",query)
        if(limit==='0'){
            dataModal.paginate(query,{page:page,limit:0},function(err,result) {
                if (err) res.status(500).send(err);
                else{
                    limit=result.total
                    console.log("Result",result)

                // ...
                // res.json(result)
                // console.log("RESULT", result)
                }
              });

        }
        dataModal.paginate(query,{page:page,limit:limit},function(err,result) {
            if (err) {console.log(err);res.status(500).send(err)}
            else{
                console.log("Result        ",result)
            // ...
            return res.status(200).json(result)
            // console.log("RESULT", result)
            }
          });
        // console.log("DATA",data)
        // return res.status(200).json(data);
    }
    catch(error){
        console.log(error);
        return res.status(500).json(error)
    }

}