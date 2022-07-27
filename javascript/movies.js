
let movieList = [{  name : "Avatar",
                    genre : "Science Fiction",
                    comingSoon : Boolean,
                    availDate : "10/12/2009",
                    thumbnail : "http://www.impawards.com/2009/posters/avatar_ver4.jpg",
                    preview : "https://www.youtube.com/embed/5PSNL1qE6VY"
                },
                {   name : "I Am Legend",
                    genre : "Thriller",
                    comingSoon : Boolean,
                    availDate : "22/06/2007",
                    thumbnail : "http://www.impawards.com/2007/posters/i_am_legend_ver4.jpg",
                    preview : "https://www.youtube.com/embed/sFNPNT_4Qww"
                },
                {   name : "1408",
                    genre : "Horror",
                    comingSoon : Boolean,
                    availDate : "10/12/2009",
                    thumbnail : "http://www.impawards.com/2007/posters/fourteen_hundred_and_eight.jpg",
                    preview : "https://www.youtube.com/embed/WIASqPZqnhs"
                },
                {   name : "Pirates of the Caribbean",
                    genre : "Fantasy",
                    comingSoon : Boolean,
                    availDate : "09/07/2003",
                    thumbnail : "http://www.impawards.com/2003/posters/pirates_of_the_caribbean_ver3.jpg",
                    preview : "https://www.youtube.com/embed/Hgeu5rhoxxY"
                },
                {   name : "Avengers: Endgame",
                    genre : "Superhero",
                    comingSoon : Boolean,
                    availDate : "26/04/2019",
                    thumbnail : "http://www.impawards.com/2019/posters/avengers_endgame_ver2.jpg",
                    preview : "https://www.youtube.com/embed/TcMBFSGVi1c"
                },
                {   name : "Man of Steel",
                    genre : "Superhero",
                    comingSoon : Boolean,
                    availDate : "14/06/2013",
                    thumbnail : "http://www.impawards.com/2013/posters/man_of_steel_ver2.jpg",
                    preview : "https://www.youtube.com/embed/T6DJcgm3wNY"
                },
                {   name : "Grown Ups",
                    genre : "Comedy",
                    comingSoon : Boolean,
                    availDate : "25/06/2010",
                    thumbnail : "http://www.impawards.com/2010/posters/grown_ups_ver2.jpg",
                    preview : "https://www.youtube.com/embed/e01NVCveGkg"
                },
                {   name : "American Sniper",
                    genre : "War Drama",
                    comingSoon : Boolean,
                    availDate : "25/12/2014",
                    thumbnail : "http://www.impawards.com/2014/posters/american_sniper.jpg",
                    preview : "https://www.youtube.com/embed/99k3u9ay1gs"
                },
                {   name : "Shrek",
                    genre : "Comedy",
                    comingSoon : Boolean,
                    availDate : "18/05/2001",
                    thumbnail : "http://www.impawards.com/2001/posters/shrek_ver2.jpg",
                    preview : "https://www.youtube.com/embed/CwXOrWvPBPk"
                },
                {   name : "The Lion King",
                    genre : "Musical Drama",
                    comingSoon : Boolean,
                    availDate : "15/06/1994",
                    thumbnail : "http://www.impawards.com/1994/posters/lion_king_ver2.jpg",
                    preview : "https://www.youtube.com/embed/eHcZlPpNt0Q"
                },
                {   name : "Titanic",
                    genre : "Disaster",
                    comingSoon : Boolean,
                    availDate : "20/12/1997",
                    thumbnail : "http://www.impawards.com/1997/posters/titanic_ver2.jpg",
                    preview : "https://www.youtube.com/embed/kVrqfYjkTdQ"
                },
                {   name : "Star Wars: Episode IV - A New Hope",
                    genre : "Science Fiction",
                    comingSoon : Boolean,
                    availDate : "25/05/1977",
                    thumbnail : "http://www.impawards.com/1977/posters/star_wars_ver2.jpg",
                    preview : "https://www.youtube.com/embed/L-_xHEv0l-w"
                },
                {   name : "Jumanji",
                    genre : "Fantasy",
                    comingSoon : Boolean,
                    availDate : "15/12/1995",
                    thumbnail : "http://www.impawards.com/1995/posters/jumanji_ver2.jpg",
                    preview : "https://www.youtube.com/embed/eTjDsENDZ6s"
                },
                {   name : "Lone Survivor",
                    genre : "War",
                    comingSoon : Boolean,
                    availDate : "25/12/2013",
                    thumbnail : "http://www.impawards.com/2013/posters/lone_survivor.jpg",
                    preview : "https://www.youtube.com/embed/yoLFk4JK_RM"
                },
                {   name : "Forrest Gump",
                    genre : "Comedy Drama",
                    comingSoon : Boolean,
                    availDate : "06/07/0994",
                    thumbnail : "http://www.impawards.com/1994/posters/forrest_gump.jpg",
                    preview : "https://www.youtube.com/embed/bLvqoHBptjg"
                },
                {   name : "Avatar: The Way of Water",
                    genre : "Science Fiction",
                    comingSoon : Boolean,
                    availDate : "16/12/2022",
                    thumbnail : "http://www.impawards.com/2022/posters/avatar_the_way_of_water.jpg",
                    preview : "https://www.youtube.com/embed/a8Gx8wiNbs8"
                },
                {   name : "Black Panther: Wakanda Forever",
                    genre : "Superhero",
                    comingSoon : Boolean,
                    availDate : "11/11/2022",
                    thumbnail : "http://www.impawards.com/2022/posters/black_panther_wakanda_forever.jpg",
                    preview : "https://www.youtube.com/embed/RlOB3UALvrQ"
                },
                {   name : "Beast",
                    genre : "Thriller",
                    comingSoon : Boolean,
                    availDate : "19/08/2022",
                    thumbnail : "http://www.impawards.com/2022/posters/beast.jpg",
                    preview : "https://www.youtube.com/embed/oQMc7Sq36mI"
                },
                {   name : "Halloween Ends",
                    genre : "Horror",
                    comingSoon : Boolean,
                    availDate : "14/10/2022",
                    thumbnail : "http://www.impawards.com/2022/posters/halloween_ends.jpg",
                    preview : "https://www.youtube.com/embed/i_mAWKyfj6c"
                },
                {   name : "Thirteen Live",
                    genre : "Drama Survival",
                    comingSoon : Boolean,
                    availDate : "29/07/2022",
                    thumbnail : "http://www.impawards.com/2022/posters/thirteen_lives_ver2.jpg",
                    preview : "https://www.youtube.com/embed/R068Si4eb3Y"
                }
            ]

let moviesData = JSON.stringify(movieList);
localStorage.setItem("moviesData", moviesData);

let movieBanners = [{ 
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbRjcM7fG0Q8si9vhzTgTHDSmQK5DjbE3CNGe9up9MVtDAOac_9VK4eC1MTjDf8tegmMFxvjAMdT50KUv7Gn_rpvH3AltD8r2vE.webp?r=bf5"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQjgR9o7KMkUXt7yzXn-ysDQuNZFfcsVVPk5_jx0aB-DqP5Y-_yQVvkghllrbx8oGPCVsHgmKZ6oKQqHFXkRp6OEPO1X0FJHHOKdtxcPC50kxbEPADl0g-1HH-wEy9j9AWgs.jpg?r=1f7"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa--4u7QcsJQdf53iAiYUxg5AQubu23-RUXHN0JjO3Kh16FufjeFz2UbxxQGlK1znToLeFDlNrOBLK6AswUgMnogctvL6G2RU9Y.webp?r=c89"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd4tC_HYqvJFULKvX_EQcNIIC9OAsUFuqW5znSkNOysuxnfI1wfp6Z6YZwfHb5w8pH1A4pSDbuRzcJSycrhGTMYOvg0dekwDcTE.webp?r=9d7"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd3ILrJVksMo_BVlrXxTmjvQnLnrZrcEHNE59aAwZMsm4B7HCt18dCNj31N2BThfjNFn60J1p-P7Mk9-uEVAftuP4bVje7-EsIc.webp?r=8df"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3niyHZa03GVgp7JNEcvMyb0xH0fffNRBRPBykog-x0I8U6_VKdnEFNdMAycNvKdsIIP-SE-BNyFdvoBUN7fu1bq1XER4wPay0.webp?r=296"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABULufBay5E7BiBRh6C9tFLuEDaEPzCgPBrXUy0EFN-GZc8yRX4qoE2emdgdncaiCGltORVtrvKIN8Rqk_w7Iz_On_qJPAti8TK4.webp?r=efe"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc3w8HTZy32bEWiprDAiowUZaZs_AoscwWKYmlG_puml4XQS6xIyV77WJ8UBTl7vtFLtIL8fk_Pwg5UCmXbSaNHUO4fV80jUkQc.webp?r=6ca"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABa-WnWlSLsTnXeCiBU1kaYSENOsFpNTtkZwzk-CmSF47UGwLMH2oTVfMr0zGovzgy9J93230-H9GtY0CGaQiZpzLhiwh0-8f7rs.webp?r=7e0"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX0VXoWZWmOoiTwWEO79n4a3aZk2ZenBK8Af2TZzKnAWf2G2HR9Sc-1MHZ9DvJ_69ujT1492k8QDs8Qd74MGZUf27uTcTaxnjW4.webp?r=23c"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZjdJTYJbpThARROVd8u_4X7HO1EFImN2fl2Gz-us2oO2VUfYICr33okROS7qMZnecTVHtbu0XFxoXgYh2IkUB7y0gg8KdET6KU.webp?r=ac0"
                    },
                    {
                        banner : "https://occ-0-4175-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVVRTncuXU-_bD-NkDmoYbxH2eYAknNVQPf-Su1iXRrvG2U1ucZsX3rL8Y0MfFlgAJmkt6_MybYLMPMBBvwtD8cmvRCUwlPEfrI.webp?r=8ff"
                    }
                ]

let movieBannersData = JSON.stringify(movieBanners);
localStorage.setItem("movieBannersData", movieBannersData);
