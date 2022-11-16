import dayjs from "dayjs";

export function getExt(word: string) {
  return word.substring(word.lastIndexOf('.') + 1)
}

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}


export function getMonthIndex() {
  const today = new Date();
  let month = today.getMonth();

  return month;
}


const toBase64 = (file:any) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});

export async function imageToBase64(image:any) {

  return await toBase64(image);
}







