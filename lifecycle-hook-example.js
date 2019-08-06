let BlogPostComponent = {
  props: ["id"],
  data: () => ({
    blogPost: null
  }),
  created() {
    axios.get("api/posts/" + this.id).then(response => {
      this.blogPost = response.data;
    });
  }
};
