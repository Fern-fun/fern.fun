const Template = (
  <div className="article-container">
    <div className="article-paragraph">
      <div className="article-paragraph__title">
        Convert a File to a Different Format
      </div>
      <div className="article-paragraph__content">
        <div className="article-paragraph__content__text">
          The most basic thing you can do with FFmpeg is convert a file to a
          different format. Use the ffmpeg command-line tool with the following
          syntax:
        </div>
        <div className="article-paragraph__content__code">
          <pre>ffmpeg -i in.mov out.mp4</pre>
        </div>
      </div>
    </div>
  </div>
);

export default Template;
