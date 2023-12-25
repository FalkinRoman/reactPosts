//функция для подчсчета страниц
export const getPageCount = (totalCount, limit) => {
   return Math.ceil(totalCount / limit)
}

//функция получения массива с номерами страниц
export const getPagesArray = (totalPages) => {
    let pagesArray = []
    for( let i=0 ; i < totalPages; i++) {
        pagesArray.push(i + 1)
      }
      return pagesArray;
}