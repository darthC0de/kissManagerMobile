import { iPassword } from '../../interface/Password';
import { DatabaseConnection } from '../connection';

const table = 'passwords';
const db = DatabaseConnection.getConnection();

export default class PasswordServices {
  static addData(param: iPassword) {
    return new Promise((resolve, reject) =>
      db.transaction(
        tx => {
          tx.executeSql(
            `insert into ${table} (title,username,password,link,icon) 
                values (?,?,?,?,?)`,
            [
              param.title,
              param.username,
              param.password,
              param.link,
              param.icon,
            ],
            (_, { insertId, rows }) => {
              console.log('id insert: ' + insertId);

              resolve(insertId);
            },
          ),
            (sqlError: Error) => {
              console.log(sqlError);
            };
        },
        txError => {
          reject(txError);
        },
      ),
    );
  }

  static deleteById(id: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        tx => {
          tx.executeSql(
            `delete from ${table} where id = ?;`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            },
          ),
            (sqlError: Error) => {
              console.log(sqlError);
            };
        },
        txError => {
          reject(txError);
        },
      ),
    );
  }

  static updateById(param: iPassword) {
    return new Promise((resolve, reject) =>
      db.transaction(
        tx => {
          tx.executeSql(
            `update ${table} set title = ?,username = ?,password = ?,link = ?,icon = ? where id = ?;`,
            [
              param.title,
              param.username,
              param.password,
              param.link,
              param.icon,
              param.id,
            ],
            (_, response) => {
              resolve(response);
            },
          ),
            (sqlError: Error) => {
              console.log(sqlError);
            };
        },
        txError => {
          console.log(txError);
        },
      ),
    );
  }

  static findById(id: number) {
    return new Promise((resolve, reject) =>
      db.transaction(
        tx => {
          tx.executeSql(
            `select * from ${table} where id=?`,
            [id],
            (_, { rows }) => {
              resolve(rows);
            },
          ),
            (sqlError: Error) => {
              console.log(sqlError);
            };
        },
        txError => {
          console.log(txError);
        },
      ),
    );
  }

  static findAll() {
    return new Promise((resolve, reject) =>
      db.transaction(
        tx => {
          tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
            resolve(rows);
          }),
            (sqlError: Error) => {
              console.log(sqlError);
            };
        },
        txError => {
          console.log(txError);
        },
      ),
    );
  }
}
