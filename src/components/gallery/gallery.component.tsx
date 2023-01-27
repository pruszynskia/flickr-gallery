import React, { ChangeEvent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import photosData from "../../apis/photosData";
import { IGallery, IPhoto } from "../../apis/photos.interface";
import { imageUrl } from "../../apis/imageUrl";
import styles from "./gallery.module.scss";
import ApiError from "../common/apiError";
import Loading from "../common/loading";

const Gallery = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // TODO:
  // use QueryCache for persistance/caching
  const { data, error, isLoading, refetch } = useQuery<IGallery>(
    "photos",
    photosData(search, page)
  );

  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // TODO:
  // replace with search input debounce fetch
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(searchInput);
  };

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    if (page >= 2) setPage(page - 1);
  };

  useEffect(() => {
    refetch();
  }, [search, page]);

  if (error) return <ApiError error={error} />;
  if (isLoading) return <Loading />;

  return (
    <div className={styles.bodyContainer}>
      <div className={styles.inputContainer}>
        <form onSubmit={handleSearch}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search..."
            onChange={handleSearchInput}
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
      <div>
        <nav>
          <button className={styles.button} onClick={handlePrev}>
            prev
          </button>
          <button className={styles.button} onClick={handleNext}>
            next
          </button>
        </nav>
        <p className={styles.pageNumber}>Page number: {page}</p>
      </div>
      <div className={styles.galleryContainer}>
        {data?.photos?.photo?.map((el: IPhoto) => (
          <div key={el.id} className={styles.imageContainer}>
            <img
              className={styles.image}
              key={el.id}
              src={imageUrl(el)}
              alt={el.title}
            />
            <p className={styles.title}>{el.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
