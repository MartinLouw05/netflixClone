
let movieList = [{  name : "Avatar",
                    genre : "Science Fiction",
                    comingSoon : Boolean,
                    availDate : "2009-12-10",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/5PSNL1qE6VY"
                },
                {   name : "I Am Legend",
                    genre : "Thriller",
                    comingSoon : Boolean,
                    availDate : "2007-06-22",
                    thumbnail : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHox76WNKeFcPGLKO6189r3pgqYCl8diSVwcUZgGXdYmaU9oCU",
                    preview : "https://www.youtube.com/embed/sFNPNT_4Qww"
                },
                {   name : "1408",
                    genre : "Horror",
                    comingSoon : Boolean,
                    availDate : "2009-12-10",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BMjQ2ODkxMjc4OV5BMl5BanBnXkFtZTgwMTgzNzQyMTI@._V1_FMjpg_UX1000_.jpg",
                    preview : "https://www.youtube.com/embed/WIASqPZqnhs"
                },
                {   name : "Pirates of the Caribbean",
                    genre : "Fantasy",
                    comingSoon : Boolean,
                    availDate : '2003-07-09',
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
                    preview : "https://www.youtube.com/embed/Hgeu5rhoxxY"
                },
                {   name : "Avengers: Endgame",
                    genre : "Superhero",
                    comingSoon : Boolean,
                    availDate : "2019-04-26",
                    thumbnail : "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
                    preview : "https://www.youtube.com/embed/TcMBFSGVi1c"
                },
                {   name : "Man of Steel",
                    genre : "Superhero",
                    comingSoon : Boolean,
                    availDate : "2013-06-14",
                    thumbnail : "https://cdn.shopify.com/s/files/1/0440/1083/2027/products/man-of-steel-poster_1024x1024.jpg?v=1605716681",
                    preview : "https://www.youtube.com/embed/T6DJcgm3wNY"
                },
                {   name : "Grown Ups",
                    genre : "Comedy",
                    comingSoon : Boolean,
                    availDate : "2010-06-25",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BMjA0ODYwNzU5Nl5BMl5BanBnXkFtZTcwNTI1MTgxMw@@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/e01NVCveGkg"
                },
                {   name : "American Sniper",
                    genre : "War Drama",
                    comingSoon : Boolean,
                    availDate : "2014-12-25",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BMTkxNzI3ODI4Nl5BMl5BanBnXkFtZTgwMjkwMjY4MjE@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/99k3u9ay1gs"
                },
                {   name : "Shrek",
                    genre : "Comedy",
                    comingSoon : Boolean,
                    availDate : "2001-05-18",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/CwXOrWvPBPk"
                },
                {   name : "The Lion King",
                    genre : "Musical Drama",
                    comingSoon : Boolean,
                    availDate : "1994-06-15",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/eHcZlPpNt0Q"
                },
                {   name : "Titanic",
                    genre : "Disaster",
                    comingSoon : Boolean,
                    availDate : "1997-12-20",
                    thumbnail : "http://cdn.shopify.com/s/files/1/1057/4964/products/titanic-vintage-movie-poster-original-1-sheet-27x41_grande.jpg?v=1622869492",
                    preview : "https://www.youtube.com/embed/kVrqfYjkTdQ"
                },
                {   name : "Star Wars: Episode IV - A New Hope",
                    genre : "Science Fiction",
                    comingSoon : Boolean,
                    availDate : "1977-05-25",
                    thumbnail : "http://www.studioremarkable.com/wp-content/uploads/1995/02/Star-Wars-1977-Poster.jpg",
                    preview : "https://www.youtube.com/embed/L-_xHEv0l-w"
                },
                {   name : "Jumanji",
                    genre : "Fantasy",
                    comingSoon : Boolean,
                    availDate : "1995-12-15",
                    thumbnail : "https://filmgrimoire.files.wordpress.com/2015/02/mpw-34112.jpg?w=500",
                    preview : "https://www.youtube.com/embed/eTjDsENDZ6s"
                },
                {   name : "Lone Survivor",
                    genre : "War",
                    comingSoon : Boolean,
                    availDate : "2013-12-25",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BMjA0NTgwOTk5Ml5BMl5BanBnXkFtZTcwMjE3NDc5OQ@@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/yoLFk4JK_RM"
                },
                {   name : "Forrest Gump",
                    genre : "Comedy Drama",
                    comingSoon : Boolean,
                    availDate : "1994-07-06",
                    thumbnail : "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
                    preview : "https://www.youtube.com/embed/bLvqoHBptjg"
                },
                {   name : "Avatar: The Way of Water",
                    genre : "Science Fiction",
                    comingSoon : Boolean,
                    availDate : "2022-12-16",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/a8Gx8wiNbs8"
                },
                {   name : "Black Panther: Wakanda Forever",
                    genre : "Superhero",
                    comingSoon : Boolean,
                    availDate : "2022-11-11",
                    thumbnail : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Black_Panther_Wakanda_Forever_poster.jpg/220px-Black_Panther_Wakanda_Forever_poster.jpg",
                    preview : "https://www.youtube.com/embed/RlOB3UALvrQ"
                },
                {   name : "Beast",
                    genre : "Thriller",
                    comingSoon : Boolean,
                    availDate : "2022-08-19",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BMTE1YWMwYjMtMzI3MS00MDZkLWEzZWYtYjdhNGEyYmZiY2MwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
                    preview : "https://www.youtube.com/embed/oQMc7Sq36mI"
                },
                {   name : "Halloween Ends",
                    genre : "Horror",
                    comingSoon : Boolean,
                    availDate : "2022-10-14",
                    thumbnail : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d6f0598f-7511-4d24-8a24-12dc7b4b0ab7/detfi3r-9c0d12b7-dcdd-4d98-8d32-824e5a3516e7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q2ZjA1OThmLTc1MTEtNGQyNC04YTI0LTEyZGM3YjRiMGFiN1wvZGV0Zmkzci05YzBkMTJiNy1kY2RkLTRkOTgtOGQzMi04MjRlNWEzNTE2ZTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-eaq19nMxRXq9EA7XcVLlkdOPBdzctm5XilUmEDDSzY",
                    preview : "https://www.youtube.com/embed/i_mAWKyfj6c"
                },
                {   name : "Thirteen Lives",
                    genre : "Drama Survival",
                    comingSoon : Boolean,
                    availDate : "2022-07-29",
                    thumbnail : "https://m.media-amazon.com/images/M/MV5BOGI1OWNiMGUtMTg4NC00MjdlLWJlMzYtMGI0YTJjY2MyYzMzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
                    preview : "https://www.youtube.com/embed/R068Si4eb3Y"
                }
            ]

let movieBanners = [{ 
                        bannerImg : "https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg"
                    },
                    {
                        bannerImg : "https://samfillingham.com/wp-content/uploads/2020/05/2200-1000px-banner-Muna-1310x595.jpg"
                    },
                    {
                        bannerImg : "https://www.mortalkombatonline.com/m/b/JjlTo6syTJvFxMT7hgziLeCBdHmESvNs6eF5VcoztQDSnGfzRt8GcNBhWnhB0H6gCJZc9zs60C74IGJca5ceLTR1uXgtZD/4adSo"
                    },
                    {
                        bannerImg : "https://teaser-trailer.com/wp-content/uploads/John-Wick-2-New-Banner.jpg"
                    },
                    {
                        bannerImg : "https://collider.com/wp-content/uploads/dark-knight-rises-movie-poster-banner-catwoman.jpg"
                    },
                    {
                        bannerImg : "https://elvis.warnerbros.com/assets/images/desktopbanner.jpg"
                    },
                    {
                        bannerImg : "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/05/4-Writing-on-Face-Movie-Posters.jpg?q=50&fit=crop&w=737&h=368&dpr=1.5"
                    },
                    {
                        bannerImg : "https://www.quotemaster.org/images/7b/7be8a06e2dff2bc201c1b0a323120f44.jpg"
                    },
                    {
                        bannerImg : "http://comicsagogo.files.wordpress.com/2011/11/tintin-movie-poster-horizontal.jpg"
                    },
                    {
                        bannerImg : "https://i.pinimg.com/550x/cd/44/13/cd441305da6487ac06b84dfa445c6d9e.jpg"
                    },
                    {
                        bannerImg : "https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg"
                    },
                    {
                        bannerImg : "https://dorksideoftheforce.com/files/2021/05/Star-Wars-Posters-composite.jpg"
                    }
                ]

let moviesData = JSON.stringify(movieList);
let movieBannersData = JSON.stringify(movieBanners);

window.onload = function() {
    localStorage.setItem("moviesData", moviesData);
    localStorage.setItem("movieBannersData", movieBannersData);
}