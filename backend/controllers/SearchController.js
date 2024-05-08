import prisma from "../DB/db.config.js";

class SearchController{
    static async emp_search(req, res){
        const { query } = req.body;
        console.log(query);
        try {
            const employees = await prisma.emp_id.findMany({
                select: {
                    employee_code: true
                }
            });
            const suggestions = employees.map((emp)=> emp.employee_code.toString()).filter((code)=> code.startsWith(query));
            console.log("Suggestions:",suggestions);
            res.json({
                message: 'success',
                data: suggestions
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: 'error', error: err.message });
        }
    }
}


export default SearchController