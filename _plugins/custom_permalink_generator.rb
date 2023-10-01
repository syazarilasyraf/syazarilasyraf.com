# _plugins/custom_permalink_generator.rb
module Jekyll
    class CustomPermalinkGenerator < Generator
      def generate(site)
        site.collections['bookmarks'].docs.each do |doc|
          title = doc.data['title']
          slug = title.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
          doc.data['permalink'] = "/bookmarks/#{slug}/"
        end
      end
    end
  end
