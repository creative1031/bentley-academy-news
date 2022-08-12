import LoadingIcon from '../assets/loading-icon.jpg'

export default function Loading() {
  return (
    <div className="flex justify-center items-center">
      <img src={LoadingIcon} alt="loading" className="w-48" />
    </div>
  )
}
