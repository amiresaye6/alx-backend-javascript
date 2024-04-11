import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const firstObject = new ClassRoom(19);
  const secondObject = new ClassRoom(20);
  const thirdObject = new ClassRoom(34);

  const res = [firstObject, secondObject, thirdObject];
  return (res);
}
