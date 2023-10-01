require 'uri'

module Jekyll
  module CustomFilters
    def extract_domain(input)
      return '' if input.nil? || input.empty?

      URI.parse(input).host
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)
