import { useQuery } from '@apollo/client'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'

const FetchMain = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    //fetchPolicy: 'network-only', //cacheを使わない、常にサーバーにデータを取りに行く
    //fetchPolicy: 'cache-first', //デフォルト キャッシュがあれば常にキャッシュを見に行く
    //fetchPolicy: 'no-cache' //キャッシュを作らない
    fetchPolicy: 'cache-and-network', //とりあえずキャッシュで、データ取得が終わったらキャッシュと置き換える
  })
  if (error) {
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )
  }
  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {console.log(data)}
      {data?.users.map((user, index) => {
        return (
          <p className="my-1" key={index}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
