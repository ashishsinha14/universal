import { Request, Response, NextFunction } from 'express';

export class DataRoute {
    dataRoute(app, db): void {
        // Get All Songs
        app.route('/api/get-songs').get((req: Request, res: Response, next: NextFunction) => {
            let query = 'SELECT * FROM review WHERE showOnHomePage = 1';
            db.query(query,(error, results) => {
                    if (error) {
                        console.log(error);
                        res.status(500).json({ status: 'error' });
                    } else {
                        res.status(200).json(results);
                    }
                }
            );
        })
    }
}