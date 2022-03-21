import { Entity, MikroORM, PrimaryKey, SerializedPrimaryKey, types } from '@mikro-orm/core';
import { v1 } from 'uuid';

@Entity()

export class UuidEntity {

  @PrimaryKey({
    type: types.uuid,
  })
  _id: string;

  @SerializedPrimaryKey({
    type: types.uuid,
  })
  id!: string;

  constructor(id: string = '') {
    this._id = id;
  }

}

export class UuidEntityWithoutSerializedKey {

  @PrimaryKey({
    type: types.uuid,
  })
  _id: string;

  constructor(id: string = '') {
    this._id = id;
  }

}

describe('GH #rayvincent2', () => {

  let orm: MikroORM;

  beforeAll(async () => {
    orm = await MikroORM.init({
      entities: [UuidEntity],
      clientUrl: 'mongodb://localhost:27017,localhost:27018,localhost:27019/mikro-orm-test?replicaSet=rs',
      type: 'mongo',
    });
    await orm.em.nativeDelete(UuidEntity, {});
  });

  afterAll(async () => {
    await orm.close(true);
  });

  it('should create entity with primary key and serialized key as string', async () => {
    const id = v1();
    const curly = new UuidEntity(id);

    await orm.em.persistAndFlush(curly);
    orm.em.clear();

    const curly1 = await orm.em.findOneOrFail(UuidEntity, { id });
    const curly2 = await orm.em.findOneOrFail(UuidEntity, { _id: id });
    expect(id).toEqual(curly.id);
    expect(id).toEqual(curly1.id);
    expect(id).toEqual(curly2.id);
  });

  it('should create entity with primary key and serialized key as string and alter id before saving', async () => {
    const id = v1();
    const curly = new UuidEntity();
    curly.id = id;

    await orm.em.persistAndFlush(curly);
    orm.em.clear();

    await orm.em.findOneOrFail(UuidEntity, { id });
  });

  it('should ensure that setting getting empty strings return null', async () => {
    const curly = new UuidEntity();
    expect(curly.id).toEqual(null);

    const id = v1();
    curly.id = id;
    expect(curly._id).toEqual(id);
    expect(curly.id).toEqual(id);

    curly.id = '';
    expect(curly._id).toEqual(null);
    expect(curly.id).toEqual(null);
  });
});
