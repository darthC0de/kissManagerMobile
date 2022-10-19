import Realm from 'realm';

export default class Database {
  private path: string = '@kissmanager';

  private schemaVersion: number = 1;
  private cursor = new Realm({
    path: this.path,
    schema: [
      {
        name: 'Password',
        properties: {
          id: { type: 'string', indexed: true },
          title: { type: 'string', indexed: true },
          username: 'string',
          password: 'string',
          link: 'string?',
          icon: { type: 'string', default: 'lock' },
        },
        primaryKey: 'id',
      },
    ],
    schemaVersion: this.schemaVersion,
    deleteRealmIfMigrationNeeded: true,
  });
  findAll() {
    const data = this.cursor.objects('Password');
    console.log(typeof data);
    return data;
  }
  clearDatabase() {
    console.log('Cleaning database');
    this.cursor.write(() => {
      this.cursor.deleteAll();
    });
  }
}
