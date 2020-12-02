import { DatabaseConnection } from './connection'

var db: any = null;

export default class databaseInit {
    constructor() {
        db = DatabaseConnection.getConnection()
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
        console.log('Foreign keys turned on')
    );
        this.InitDb()
    }
    private InitDb() {
        var sql = [
            `create table if not exists passwords (
            id integer primary key autoincrement,
            title varchar(255),
            username varchar(255),
            password varchar(255),
            link varchar(255),
            icon varchar(255)
            );`,
        ];

        db.transaction(
            tx => {
                for (var i = 0; i < sql.length; i++) {
                    console.log("execute sql : " + sql[i]);
                    tx.executeSql(sql[i]);
                }
            }, (error: Error) => {
                console.log("error call back : " + JSON.stringify(error));
                console.log(error);
            }, () => {
                console.log("transaction complete call back ");
            }
        );
    }

}