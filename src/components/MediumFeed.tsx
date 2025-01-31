import axios, { AxiosResponse } from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FeedJson {
    status: string;
    feed: {
        url: string;
        title: string;
        link: string;
        author: string;
        description: string;
        image: string;
    };
    items: Post[];
}

interface Post {
    title: string;
    description: string;
    content: string;
    pubDate: string;
    link: string;
    thumbnail: string;
    guid: string;
    author: string;
};

export default function MediumFeed () {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = () => {
        axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rbfraphael%3Ft%3D${(new Date()).getTime()}`, {
            headers: { 'Accept': "application/json" }
        }).then((res: AxiosResponse<FeedJson>) => {
            const latestPosts = res.data.items.slice(0, 4).map((post: Post) => {
                const postBody = (new DOMParser()).parseFromString(post.description, "text/html");
                const previewImage: string = postBody.querySelector("img")?.src ?? "";

                post.thumbnail = previewImage;
                
                return post;
            });

            setPosts(latestPosts);
        });
    };

    return (
        <section className="medium-feed container py-5 my-5">
            <div className="row">
                <div className="col-12">
                    <div className="section-divider" data-aos="fade-up"></div>
                    <h2 className="display-2 fw-semibold mb-5" data-aos="fade-up">Latest articles</h2>
                </div>
            </div>
            <div className="row align-items-center justify-content-start">
                { posts.map((post, i) => (
                    <div key={i} className="col-12 col-lg-6 mb-5 mb-lg-0">
                        <article className="d-flex flex-column-reverse flex-lg-row gap-2 justify-content-between shadow-lg p-3 rounded-4">
                            <div className="content">
                                <span className="text-secondary">{ dayjs(post.pubDate).format("MMM DD, YYYY") }</span>
                                <Link href={post.link} target="_blank" className="text-black">
                                    <h3 className="fw-bold">{ post.title }</h3>
                                </Link>
                            </div>
                            <div className="image">
                                <div className="post-image">
                                    <Image src={post.thumbnail} alt={post.title} className="rounded-4" width="256" height="256" />
                                </div>
                            </div>
                        </article>
                    </div>
                )) }
            </div>
        </section>
    );
};