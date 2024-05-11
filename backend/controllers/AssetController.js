import vine from "@vinejs/vine";
import prisma from "../DB/db.config.js";
// import { allocateAssetSchema } from '../validations/assetValidation.js'

class AssetController {
    static async allocateAsset(req, res) {
        const asset_data = req.body;

        try {
            const findAsset = await prisma.it_assets.findUnique({
                where: {
                    service_tag: asset_data.service_tag
                }
            })

            if (!findAsset) {
                return res.status(401).json({
                    status: 401,
                    message: "Asset not found"
                });
            }

            console.log('Emp_id:', asset_data.emp_id);
            const asset = await prisma.it_assets.update({
                where: {
                    service_tag: asset_data.service_tag
                },
                data: {
                    emp_id: parseInt(asset_data.emp_id),
                    date_issued: new Date(asset_data.date_issued), // Use new Date() to get the current date and time
                    asset_state: "In Use"
                }
            })

            res.send({
                message: "asset added",
                asset_data
            });
        } catch (err) {
            console.log(err);
        }
    }


    static async checkStatus(req, res){
        try {
            const data = req.body;
            console.log(data)
    
            const status = await prisma.it_assets.findUnique({
                where: {
                    service_tag: data.serviceTag
                }
            })

            if(!status){
                res.status(401).json("Asset Not Found")
            }

            // if(status.asset_state === "In Store"){

            // }
    
            console.log(status);
            res.status(200).json({ status: status.asset_state, code:status.asset_code }); // Assuming you want to send the status back in the response
        } catch (error) {
            console.error("Error occurred while checking status:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}

export default AssetController;


 