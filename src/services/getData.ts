import axios from 'axios'

const sleep = (delay: number) => {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise((res) => setTimeout(res, delay))
}

export const getTwitterData = async () => {
  await sleep(1300)

  const data = await axios.get('data/twitterData.json')

  console.log(data)

  return data
}

// 데이터 하나 불러오는데 이렇게 servies 폴더를 따로 만들어 관리하는 것이 더 좋은 것인지 생각해보기
