import { Star } from "./Star";

export interface Repo {
    id: number;
    name: string;
    description: string;
    watchers_count: number
}

interface Props {
    repos: Repo[]
}

const GroupList = ({repos}: Props) => {
    return (
        <ul>
            {repos.map((repo: Repo) => {
                  const {id, name, description, watchers_count } = repo

                  return(
                      <li key={id} className="flex items-center justify-between bg-gray-100 p-5 mb-2 ">
                          <div className="pt-5">
                              <h2 className="font-bold pb-2 capitalize text-gray-700">{name}</h2>
                              <p className="text-gray-700">{description}</p>
                          </div>
                          <div className="flex justify-between items-center">
                              <span className="mr-2 text-gray-700">{watchers_count}</span>
                              <Star width="18" height="18" fill="#13746D" />
                          </div>
                      </li>
                  )}
            )}
      </ul>
  )
}

export default GroupList